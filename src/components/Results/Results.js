import React from "react"
import { ResultsChart as Chart } from "./components/Chart"
import styled from "@emotion/styled"
import Text from "mineral-ui/Text"
import { lightenColor } from "../../utils"

const ResultsPage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
const Legend = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 2rem 0 0 0;
`
const LegendItem = styled.li`
  display: flex;
  align-items: center;
`
const LegendText = styled(Text)`
  margin: 0 2rem 0 1rem;
`
const LegendColor = styled.span`
  width: 2rem;
  height: 2rem;
  background: ${props => props.color};
  border: 1px solid black;
`
const StyledChart = styled(Chart)`
  flex: 4;
`

const Results = ({ parties }) => (
  <ResultsPage>
    <StyledChart height="340px" parties={parties} />
    <Legend>
      <LegendText>2019</LegendText>
      {parties.map(party => (
        <LegendItem>
          <LegendColor color={party.color} />
          <LegendText>{party.name}</LegendText>
        </LegendItem>
      ))}
    </Legend>
    <Legend>
      <LegendText>2015</LegendText>
      {parties.map(party => (
        <LegendItem>
          <LegendColor color={lightenColor(party.color)} />
          <LegendText>{party.name}</LegendText>
        </LegendItem>
      ))}
    </Legend>
  </ResultsPage>
)

export { Results }
