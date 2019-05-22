import React, { useState } from "react"
import styled from "@emotion/styled"

import NavigationBar from "./components/NavigationBar"
import Configuration from "./components/Configuration"
import Welcome from "./components/Welcome"
import Chart from "./components/Chart"

const MainContent = styled.div`
  display: flex;
  flex: 1;
  padding: 0 20rem;
  padding-top: 2rem;
  height: 100%;
`

const router = navigation => {}

const App = () => {
  const [navigation, setNavigation] = useState("chart")
  const [config, setConfig] = useState({
    cutOut: 3,
    totalSeats: 21,
    parties: [],
    places: [],
  })

  const goToConfiguration = () => setNavigation("configuration")
  const goToChart = () => setNavigation("chart")

  let content = undefined
  switch (navigation) {
    case "configuration":
      content = (
        <Configuration onConfigurationSave={setConfig} config={config} />
      )
      break
    case "welcome":
      content = <Welcome />
      break
    case "chart":
      content = <Chart />
      break
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
