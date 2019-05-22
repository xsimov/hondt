import React from "react"
import styled from "@emotion/styled"
import { PrimaryNav, NavItem } from "mineral-ui/Navigation"
import Text from "mineral-ui/Text"

const Navigation = styled(PrimaryNav)`
  justify-content: space-between;
`
const AppTitle = styled(Text)`
  line-height: 1.5;
  color: white;
`

const NavigationBar = ({ goToPage }) => (
  <Navigation>
    <AppTitle as="h1" noMargins>
      Calculadora de regidors
    </AppTitle>
    <Navigation>
      <NavItem onClick={() => goToPage("configuration")}>Configuració</NavItem>
      <NavItem onClick={() => goToPage("results")}>Resultats</NavItem>
    </Navigation>
  </Navigation>
)

export { NavigationBar }
