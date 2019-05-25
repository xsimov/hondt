import React, { useState } from "react"
import styled from "@emotion/styled"
import openSocket from "socket.io-client"
import Dialog, { DialogBody } from "mineral-ui/Dialog"
import Text from "mineral-ui/Text"

import NavigationBar from "./components/NavigationBar"
import Configuration from "./components/Configuration"
import Welcome from "./components/Welcome"
import Results from "./components/Results"
import Form from "./components/Form"

import defaultConfig from "./defaultConfig.json"
import { getSessionId } from "./utils"

const MainContent = styled.div`
  display: flex;
  flex: 1;
  padding: 0 ${({ wide }) => (wide ? "10rem" : "15rem")};
  padding-top: 2rem;
`

// const socket = openSocket("http://localhost:8088")
const socket = openSocket("wss://jp.xsimov.com:8020")

const [sessionId, possibleRoute] = getSessionId()

if (sessionId.length) {
  socket.emit("load", { sessionId: sessionId })
} else {
  socket.emit("create")
}

const useNavigation = initialValue => {
  const possiblePages = ["welcome", "results", "form", "configuration"]

  const [navigation, setNavigation] = useState(
    possiblePages.includes(initialValue) ? initialValue : "welcome"
  )

  const goToPage = pageName => {
    if (possiblePages.includes(pageName)) {
      window.history.pushState(
        {},
        "",
        `${window.location.origin}/${sessionId}/${pageName}`
      )
      return setNavigation(pageName)
    }

    window.history.pushState(
      {},
      "",
      `${window.location.origin}/${sessionId}/results`
    )
    setNavigation("results")
  }

  return [navigation, goToPage]
}

const App = () => {
  const [config, setConfig] = useState(defaultConfig)
  const [admin, setAdmin] = useState(false)
  const [navigation, goToPage] = useNavigation(possibleRoute)
  const [duplicatingData, setDuplicatingData] = useState(false)

  socket.on("created", ({ sessionId: serverSessionId, admin, config }) => {
    setConfig(config)
    setAdmin(admin)
    window.history.pushState(
      {},
      "",
      `${window.location.href}/${serverSessionId}`
    )
  })

  socket.on("update", data => {
    if (data.sessionId !== sessionId) return
    setConfig(data.config)
    setAdmin(data.admin)
  })

  const onSaveConfiguration = newConfig => {
    if (!admin) return
    setConfig(newConfig)
    socket.emit("save", { data: newConfig, sessionId: sessionId })
  }

  const copyDataToANewSession = newConfig => {
    socket.on("duplicated", ({ sessionId: newSessionId }) => {
      setTimeout(() => {
        window.location.pathname = `/${newSessionId}/configuration`
      }, 4000)
    })

    socket.emit("duplicate", { data: newConfig })
    setDuplicatingData(true)
  }

  const pages = {
    results: <Results parties={config.parties} />,
    welcome: <Welcome />,
    configuration: (
      <Configuration
        admin={admin}
        onConfigurationSave={onSaveConfiguration}
        config={config}
        copyDataToANewSession={copyDataToANewSession}
      />
    ),
    form: (
      <Form config={config} setConfig={onSaveConfiguration} admin={admin} />
    ),
  }

  const widePages = ["results", "form"]

  return (
    <React.Fragment>
      <NavigationBar
        admin={admin}
        goToPage={goToPage}
        currentPage={navigation}
      />
      <MainContent wide={widePages.includes(navigation)}>
        {pages[navigation]}
        <Dialog
          isOpen={duplicatingData}
          title="🕰Estem duplicant les dades..."
          closeOnClickOutside={false}
          closeOnEscape={false}
          disableFocusTrap
          disableFocusOnOpen
        >
          <DialogBody>
            <Text appearance="prose">
              La pàgina recarregarà sola amb les mateixes dades en una nova
              sessió per a que puguis editar-les.
            </Text>
            <Text appearance="prose">
              Els participants d'aquesta sessió on ets ara no veuran els canvis,
              però els pots compartir el link de la nova per a que els vegin!
            </Text>
          </DialogBody>
        </Dialog>
      </MainContent>
    </React.Fragment>
  )
}

export default App
