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
  padding: 0 ${({ pageName }) => (pageName === "results" ? "10rem " : "20rem")};
  padding-top: 2rem;
  height: 100%;
`

const App = () => {
  const [navigation, setNavigation] = useState("results")
  const [config, setConfig] = useState(defaultConfig)

  const pages = {
    results: <Results parties={config.parties} />,
    welcome: <Welcome />,
    configuration: (
      <Configuration onConfigurationSave={setConfig} config={config} />
    ),
  }

  const goToPage = pageName => {
    if (Object.keys(pages).includes(pageName)) return setNavigation(pageName)

    setNavigation("results")
  }

  return (
    <React.Fragment>
      <NavigationBar goToPage={goToPage} />
      <MainContent pageName={navigation}>{pages[navigation]}</MainContent>
    </React.Fragment>
  )
}

export default App
