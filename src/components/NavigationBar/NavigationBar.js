import React from "react"
import styled from "@emotion/styled"
import { PrimaryNav, NavItem } from "mineral-ui/Navigation"
import Text from "mineral-ui/Text"

const Navigation = styled(PrimaryNav)`
  justify-content: space-between;
`

const AppTitle = styled(Text)`
  color: white;
`

const NavigationBar = ({ goToConfiguration }) => (
  <Navigation>
    <AppTitle as="h1" noMargins>
      Calculadora de regidors
    </AppTitle>
    <NavItem onClick={goToConfiguration}>Configuració</NavItem>
  </Navigation>
)

export { NavigationBar }
