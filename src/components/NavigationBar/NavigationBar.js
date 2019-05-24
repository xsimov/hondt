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

const NavigationBar = ({ goToPage, currentPage }) => (
  <Navigation>
    <AppTitle as="h1" noMargins>
      <span role="img" aria-label="abacus" style={{ display: "inline-block" }}>
        🧮
      </span>{" "}
      Calculadora de regidors
    </AppTitle>
    <Navigation as="div">
      <NavItem
        onClick={() => goToPage("welcome")}
        selected={currentPage === "welcome"}
        maxWidth={500}
      >
        <span
          role="img"
          aria-label="woman-in-mac"
          style={{ display: "inline-block" }}
        >
          👩🏿‍💻️
        </span>
        Instruccions
      </NavItem>
      <NavItem
        onClick={() => goToPage("configuration")}
        selected={currentPage === "configuration"}
        maxWidth={500}
      >
        <span
          role="img"
          aria-label="woman-in-mac"
          style={{ display: "inline-block" }}
        >
          ⚙️
        </span>
        Configuració
      </NavItem>
      <NavItem
        onClick={() => goToPage("form")}
        selected={currentPage === "form"}
      >
        <span
          role="img"
          aria-label="box-with-ballot"
          style={{ display: "inline-block" }}
        >
          🗳
        </span>
        Vots
      </NavItem>
      <NavItem
        onClick={() => goToPage("results")}
        selected={currentPage === "results"}
      >
        <span
          role="img"
          aria-label="bar-chart"
          style={{ display: "inline-block" }}
        >
          📊
        </span>
        Resultats
      </NavItem>
    </Navigation>
  </Navigation>
)

export { NavigationBar }
