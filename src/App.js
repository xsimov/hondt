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
  padding: 0 ${({ pageName }) => (pageName === "chart" ? "10rem " : "20rem")};
  padding-top: 2rem;
  height: 100%;
`

const App = () => {
  const [navigation, setNavigation] = useState("chart")
  const [config, setConfig] = useState(defaultConfig)

  const goToConfiguration = () => setNavigation("configuration")
  const goToChart = () => setNavigation("chart")

  const pages = {
    chart: <Chart parties={config.parties} />,
    welcome: <Welcome />,
    configuration: (
      <Configuration onConfigurationSave={setConfig} config={config} />
    ),
  }

  return (
    <React.Fragment>
      <NavigationBar
        goToConfiguration={goToConfiguration}
        goToChart={goToChart}
      />
      <MainContent pageName={navigation}>{pages[navigation]}</MainContent>
    </React.Fragment>
  )
}

export default App
