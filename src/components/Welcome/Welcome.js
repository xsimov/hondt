import React from "react"
import Text from "mineral-ui/Text"
import Link from "mineral-ui/Link"
import styled from "@emotion/styled"
import ghLogo from "../../images/ghLogo.svg"
import xingLogo from "../../images/xingLogo.svg"

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
const SmallLogo = styled.img`
  height: 1rem;
  margin-bottom: -4px;
  margin-right: 2px;
`
const SmallLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize_prose};
`
const FixedWith = styled(Text)`
  font-family: monospace;
  background: ${({ theme }) => theme.backgroundColor_hover};
  border: 1px solid ${({ theme }) => theme.borderColor_hover};
  padding: 1px;
  border-radius: 5px;
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
      Només cal que segueixis aquests passos:
    </Text>
    <OrderedList>
      <li>
        Entra a la{" "}
        <SpecialTag>
          <span role="img" aria-label="people">
            ⚙️
          </span>
          Configuració
        </SpecialTag>{" "}
        i omple el nombre de regidors a escollir{" "}
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
        Prem{" "}
        <SpecialTag>
          Continuar{" "}
          <span role="img" aria-label="arrow-right">
            ➡️
          </span>
        </SpecialTag>{" "}
        i introdueix els partits polítics que es presenten a les eleccions. Es
        poden personalitzar els colors!{" "}
        <span role="img" aria-label="palette">
          🎨
        </span>
        . <br />
      </li>
      <li>
        Introdueix (si vols) el nombre de regidors actuals per a cada partit per
        a fer aparèixer un altre gràfic per tal de comparar els resultats de les
        eleccions anteriors amb aquestes.
      </li>
      <li>
        Prem{" "}
        <SpecialTag>
          Continuar{" "}
          <span role="img" aria-label="arrow-right">
            ➡️
          </span>
        </SpecialTag>{" "}
        altre cop i introdueix els col·legis electorals 🗳.
      </li>
      <li>
        Prem el botó{" "}
        <SpecialTag>
          <span role="img" aria-label="disquette">
            💾
          </span>
          Guardar!
        </SpecialTag>
        sobretot!
      </li>
      <li>
        Un cop completada la graella vés a <SpecialTag>🗳Vots</SpecialTag> per a
        introduïr el nombre de vots que ha guanyat cada partit a cada col·legi.
      </li>
      <li>
        A partir d'aquí ja es generarà el gràfic de la pestanya{" "}
        <SpecialTag>
          <span role="img" aria-label="graph">
            📊
          </span>
          Resultats
        </SpecialTag>{" "}
        per a comprovar si ha guanyat qui esperaves
        <span role="img" aria-label="medal">
          🥇
        </span>
        !
      </li>
    </OrderedList>
    <Text as="h2">Però... i què passa quan refresco la pàgina?</Text>
    <Text appearance="prose">
      No pateixis!
      <span role="img" aria-label="moai">
        🗿
      </span>
      <span role="img" aria-label="island-with-palm-tree">
        🏝
      </span>
    </Text>
    <Text appearance="prose">
      Quan has entrat a{" "}
      <Link href="https://calculadoradhondt.com">
        https://calculadoradhondt.com
      </Link>{" "}
      se t'ha assignat automàticament una <SpecialTag>sala virtual</SpecialTag>{" "}
      (pots veure que darrere del <FixedWith>.com/</FixedWith> hi ha uns
      caràcters estranys). Tots els canvis que facis es guardaran en aquesta
      sala virtual!
    </Text>
    <Text appearance="prose">
      Això vol dir que encara que tanquis el navegador les teves dades segueixen
      guardades!{" "}
      <span role="img" aria-label="party-face">
        🥳
      </span>
      També vol dir que si <strong>comparteixes el link</strong> d'una sala amb
      algú altre aquest algú pot veure (
      <span role="img" aria-label="warning">
        ⚠️
      </span>
      <strong>i&nbsp;modificar</strong>
      <span role="img" aria-label="warning">
        ⚠️
      </span>
      ) les dades que introdueixes en viu!{" "}
      <span role="img" aria-label="muscle">
        💪
      </span>
      . Pots veure'n un exemple aquí:{" "}
      <FixedWith>
        <Link href="https://calculadoradhondt.com/dades-d-exemple">
          https://calculadoradhondt.com/dades-d-exemple
        </Link>
      </FixedWith>
      .
    </Text>
    <Text appearance="prose">
      També pots entrar directament a una sala que t'inventis (fes servir només
      lletres{" "}
      <span role="img" aria-label="letters">
        🔡
      </span>
      , números{" "}
      <span role="img" aria-label="numbers">
        🔢
      </span>
      i guionets{" "}
      <span role="img" aria-label="dash">
        ➖
      </span>
      ) i serà teva! I llavors pots compartir un enllaç amb sentit, com el
      d'exemple{" "}
      <span role="img" aria-label="sunglasses">
        😎
      </span>
      .
    </Text>

    <Text appearance="prose">Sort!</Text>

    <Text>
      Tot això és codi lliure i obert que podeu trobar a{" "}
      <SmallLink href="https://github.com/xsimov/hondt" target="_blank">
        <SmallLogo src={ghLogo} />
        github.com/xsimov/hondt
      </SmallLink>
    </Text>

    <Text appearance="mouse">
      Fet amb molt d'
      <span role="img" aria-label="heart">
        ❤️
      </span>{" "}
      per{" "}
      <Link href="https://twitter.com/xsimov" target="_blank">
        @xsimov
      </Link>{" "}
      durant una{" "}
      <Link
        href="https://twitter.com/search?q=%23HackWeek%20xing&src=typed_query"
        target="_blank"
      >
        #HackWeek
      </Link>{" "}
      de{" "}
      <Link href="https://twitter.com/xing_esp" target="_blank">
        <SmallLogo src={xingLogo} />
        @xing_esp
      </Link>
    </Text>
  </WelcomeText>
)

export { Welcome }
