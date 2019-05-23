import React from "react"
import Text from "mineral-ui/Text"
import Link from "mineral-ui/Link"
import styled from "@emotion/styled"
import ghLogo from "../../images/GitHub-Mark.png"

const WelcomeText = styled.div`
  flex-direction: column;
`
const OrderedList = styled.ol`
  font-size: 1rem;
  font-family: "Open Sans";
  color: #333840;
  li {
    margin-bottom: 0.5rem;
  }
`
const SpecialTag = styled.span`
  background: ${({ theme }) => theme.backgroundColor_danger_hover};
  border: 1px solid ${({ theme }) => theme.borderColor_warning_hover};
  padding: 2px 8px;
  border-radius: 99999em;
`
const GithubLogo = styled.img`
  height: 1.2rem;
  margin-bottom: -5px;
`
const SmallLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize_prose};
`

const Welcome = () => (
  <WelcomeText>
    <Text as="h1">
      <span role="img" aria-label="abacus" style={{ fontSize: "2rem" }}>
        🧮
      </span>
      Calculadora D'Hondt
    </Text>
    <Text appearance="prose">
      Hola!
      <br />
      Això és una Calculadora de la Llei D'Hondt, per a anar apuntant els
      resultats dels diversos col·legis electorals{" "}
      <span role="img" aria-label="voting-box">
        🗳
      </span>
      i veure com acaba la cosa
      <span role="img" aria-label="nerdface">
        🤓
      </span>
      .
      <br />
      Per a saber més sobre la Llei D'Hondt{" "}
      <Link
        href="https://ca.wikipedia.org/wiki/Regla_D%27Hondt"
        target="_blank"
      >
        aquí tens l'enllaç a l'article de la Wikipedia!
      </Link>
    </Text>
    <Text as="h2">Com funciona això</Text>
    <Text appearance="prose">
      S'ha intentat fer de la manera més senzilla però configurable possible
      <span role="img" aria-label="lucky-fingers">
        🤞🏽
      </span>
      .
      <br />
      Només cal seguir aquests passos:
    </Text>
    <OrderedList>
      <li>
        Entrar a la{" "}
        <SpecialTag>
          <span role="img" aria-label="people">
            ⚙️
          </span>
          Configuració
        </SpecialTag>{" "}
        i omplir el nombre de regidors a escollir{" "}
        <span role="img" aria-label="people">
          👥
        </span>{" "}
        i el percentatge de la{" "}
        <Link
          href="https://ca.wikipedia.org/wiki/Barrera_electoral"
          target="_blank"
        >
          barrera electoral{" "}
          <span role="img" aria-label="under-construction">
            🚧
          </span>
        </Link>{" "}
        (ja està posat per defecte al 5% que pertoca a l'estat espanyol per a
        les municipals [veure article Wikipedia]).
      </li>
      <li>
        Prémer{" "}
        <SpecialTag>
          Continuar{" "}
          <span role="img" aria-label="arrow-right">
            ➡️
          </span>
        </SpecialTag>{" "}
        i introduïr els partits polítics que es presenten a les eleccions. Es
        poden personalitzar els colors!{" "}
        <span role="img" aria-label="palette">
          🎨
        </span>
        . <br />
      </li>
      <li>
        Introduïr (si es vol) el nombre de regidors actuals per a cada partit
        per a fer aparèixer un altre gràfic per tal de comparar els resultats de
        les eleccions anteriors amb aquestes.
      </li>
      <li>
        Prémer{" "}
        <SpecialTag>
          Continuar{" "}
          <span role="img" aria-label="arrow-right">
            ➡️
          </span>
        </SpecialTag>{" "}
        altre cop i introduïr els col·legis electorals 🗳.
      </li>
      <li>
        Prémer el botó{" "}
        <SpecialTag>
          <span role="img" aria-label="disquette">
            💾
          </span>
          Guardar!
        </SpecialTag>
      </li>
      <li>
        Anar a <SpecialTag>🗳Vots</SpecialTag> per a introduïr el nombre de vots
        que ha guanyat cada partit a cada col·legi.
      </li>
      <li>
        Visitar el gràfic de la pestanya{" "}
        <SpecialTag>
          <span role="img" aria-label="graph">
            📊
          </span>
          Resultats
        </SpecialTag>{" "}
        per a comprovar si el vostre partit ha guanyat 🥇!
      </li>
    </OrderedList>

    <Text>
      Tot això és codi lliure i obert que podeu trobar a{" "}
      <SmallLink href="https://github.com/xsimov/hondt" target="_blank">
        <GithubLogo src={ghLogo} />
        github.com/xsimov/hondt
      </SmallLink>
    </Text>
  </WelcomeText>
)

export { Welcome }
