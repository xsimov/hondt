import React from "react"
import styled from "@emotion/styled"
import { PrimaryNav, NavItem } from "mineral-ui/Navigation"
import Text from "mineral-ui/Text"
import Tooltip from "mineral-ui/Tooltip"

const Navigation = styled(PrimaryNav)`
  justify-content: space-between;
`
const AppTitle = styled(Text)`
  line-height: 1.5;
  color: white;
`
const AdminLabel = styled(Text)`
  border: 2px solid
    ${({ visitor, theme }) =>
      visitor ? theme.borderColor_warning : theme.borderColor_danger};
  background: ${({ visitor, theme }) =>
    visitor
      ? theme.backgroundColor_warningPrimary_hover
      : theme.backgroundColor_dangerPrimary_hover};
  margin: 0;
  align-items: center;
  display: flex;
  padding: 0 1rem;
  font-size: 1.5rem;
  border-radius: 8px;
  font-family: monospace;
  cursor: default;

  &:hover {
    border: 2px solid ${({ theme }) => theme.borderColor_danger_active};
    background: ${({ theme }) => theme.backgroundColor_dangerPrimary_active};
  }
`

const NavigationBar = ({ admin, goToPage, currentPage }) => (
  <Navigation>
    <AppTitle as="h1" noMargins>
      <span role="img" aria-label="abacus" style={{ display: "inline-block" }}>
        🧮
      </span>{" "}
      Calculadora de regidors
    </AppTitle>
    <Tooltip
      css={{ alignSelf: "center" }}
      content={
        admin
          ? "Només tu pots editar les dades"
          : "No pots editar les dades, però a la configuració pots copiar-les en una sessió nova"
      }
    >
      {admin ? (
        <AdminLabel noMargins>
          <span aria-label="eye" role="img">
            🖋
          </span>
          EDITOR
        </AdminLabel>
      ) : (
        <AdminLabel noMargins visitor>
          <span aria-label="eye" role="img">
            👁
          </span>
          VISITANT
        </AdminLabel>
      )}
    </Tooltip>
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
