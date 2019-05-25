import React, { useState } from "react"
import styled from "@emotion/styled"
import openSocket from "socket.io-client"

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
      window.history.pushState({}, "", `/${sessionId}/${pageName}`)
      return setNavigation(pageName)
    }

    window.history.pushState({}, "", `/${sessionId}/results`)
    setNavigation("results")
  }

  return [navigation, goToPage]
}

const App = () => {
  const [config, setConfig] = useState(defaultConfig)
  const [admin, setAdmin] = useState(false)
  const [navigation, goToPage] = useNavigation(possibleRoute)

  socket.on("created", ({ sessionId: serverSessionId }) => {
    window.location.pathname = serverSessionId
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

  const pages = {
    results: <Results parties={config.parties} />,
    welcome: <Welcome />,
    configuration: (
      <Configuration
        admin={admin}
        onConfigurationSave={onSaveConfiguration}
        config={config}
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
      </MainContent>
    </React.Fragment>
  )
}

export default App
