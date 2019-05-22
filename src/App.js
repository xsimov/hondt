import React, { useState } from "react"
import styled from "@emotion/styled"

import NavigationBar from "./components/NavigationBar"
import Configuration from "./components/Configuration"
import Welcome from "./components/Welcome"
import Results from "./components/Results"
import Form from "./components/Form"

import defaultConfig from "./defaultConfig.json"

const MainContent = styled.div`
  display: flex;
  flex: 1;
  padding: 0 ${({ wide }) => (wide ? "10rem" : "20rem")};
  padding-top: 2rem;
`

const App = () => {
  const [navigation, setNavigation] = useState("form")
  const [config, setConfig] = useState(defaultConfig)

  const pages = {
    results: <Results parties={config.parties} />,
    welcome: <Welcome />,
    configuration: (
      <Configuration onConfigurationSave={setConfig} config={config} />
    ),
    form: <Form places={config.places} parties={config.parties} />,
  }

  const widePages = ["results", "form"]

  const goToPage = pageName => {
    if (Object.keys(pages).includes(pageName)) return setNavigation(pageName)

    setNavigation("results")
  }

  return (
    <React.Fragment>
      <NavigationBar goToPage={goToPage} />
      <MainContent wide={widePages.includes(navigation)}>
        {pages[navigation]}
      </MainContent>
    </React.Fragment>
  )
}

export default App
