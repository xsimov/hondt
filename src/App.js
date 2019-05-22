import React, { useState } from "react"
import styled from "@emotion/styled"

import NavigationBar from "./components/NavigationBar"
import Configuration from "./components/Configuration"
import Welcome from "./components/Welcome"
import Chart from "./components/Chart"

import defaultConfig from "./defaultConfig.json"

const MainContent = styled.div`
  display: flex;
  flex: 1;
  padding: 0 20rem;
  padding-top: 2rem;
  height: 100%;
`

const App = () => {
  const [navigation, setNavigation] = useState("chart")
  const [config, setConfig] = useState(defaultConfig)

  const goToConfiguration = () => setNavigation("configuration")
  const goToChart = () => setNavigation("chart")

  let content = undefined
  switch (navigation) {
    case "configuration":
      content = (
        <Configuration onConfigurationSave={setConfig} config={config} />
      )
      break
    case "chart":
      content = <Chart parties={config.parties} />
      break
    default:
    case "welcome":
      content = <Welcome />
  }

  return (
    <React.Fragment>
      <NavigationBar
        goToConfiguration={goToConfiguration}
        goToChart={goToChart}
      />
      <MainContent>{content}</MainContent>
    </React.Fragment>
  )
}

export default App
