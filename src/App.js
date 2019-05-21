import React, { useState } from "react"
import styled from "@emotion/styled"

import NavigationBar from "./components/NavigationBar"
import ConfigurationStep from "./components/ConfigurationStep"
import Welcome from "./components/Welcome"

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
    case "welcome":
      return <Welcome />
    case "configuration":
      return <ConfigurationStep />
  }
}

const App = () => {
  const [navigation, setNavigation] = useState("welcome")

  const goToConfiguration = () => setNavigation("configuration")

  return (
    <React.Fragment>
      <NavigationBar goToConfiguration={goToConfiguration} />
      <MainContent>{router(navigation)}</MainContent>
    </React.Fragment>
  )
}

export default App
