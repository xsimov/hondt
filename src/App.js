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

const router = navigation => {
  switch (navigation) {
    default:
    case "configuration":
      return <Configuration />
    case "welcome":
      return <Welcome />
    case "chart":
      return <Chart />
  }
}

const App = () => {
  const [navigation, setNavigation] = useState("chart")

  const goToConfiguration = () => setNavigation("configuration")
  const goToChart = () => setNavigation("chart")

  return (
    <React.Fragment>
      <NavigationBar
        goToConfiguration={goToConfiguration}
        goToChart={goToChart}
      />
      <MainContent>{router(navigation)}</MainContent>
    </React.Fragment>
  )
}

export default App
