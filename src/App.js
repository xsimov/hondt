import React, { useState } from "react"
import styled from "@emotion/styled"
import openSocket from "socket.io-client"

import NavigationBar from "./components/NavigationBar"
import Configuration from "./components/Configuration"
import Welcome from "./components/Welcome"
import Results from "./components/Results"
import Form from "./components/Form"

import defaultConfig from "./defaultConfig.json"

const MainContent = styled.div`
  display: flex;
  flex: 1;
  padding: 0 ${({ wide }) => (wide ? "10rem" : "15rem")};
  padding-top: 2rem;
`

// const socket = openSocket("http://localhost:8088")
const socket = openSocket("wss://jp.xsimov.com:8020")

let sessionId = window.location.pathname

if (sessionId.replace("/", "").length) {
  socket.emit("load", { sessionId: sessionId })
} else {
  socket.emit("create")
}

const App = () => {
  const [navigation, setNavigation] = useState("welcome")
  const [config, setConfig] = useState(defaultConfig)
  const [admin, setAdmin] = useState(false)

  socket.on("created", ({ sessionId: serverSessionId }) => {
    window.location.pathname = serverSessionId
  })

  socket.on("update", data => {
    if (data.sessionId !== sessionId) return
    setConfig(data.config)
    setAdmin(data.admin)
  })

  const onSaveConfiguration = newConfig => {
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

  const goToPage = pageName => {
    if (Object.keys(pages).includes(pageName)) return setNavigation(pageName)

    setNavigation("results")
  }

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
