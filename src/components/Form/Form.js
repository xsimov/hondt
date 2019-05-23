import React from "react"
import styled from "@emotion/styled"
import TextInput from "mineral-ui/TextInput"
import Text from "mineral-ui/Text"
import { dhondtCalculation } from "../../utils"

const VoteCountingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;

  th,
  td {
    padding: 5px;
    border: 1px solid black;
    font-family: "Open Sans";
  }
`
const Bold = styled.strong`
  text-decoration: ${({ strike }) => (strike ? "line-through" : "none")};
`
const ColumnLayout = styled.div`
  flex-direction: column;
`

const Form = ({ config, setConfig }) => {
  const { parties, places } = config
  const updateVotes = (partyId, placeId, value) => {
    const newParties = config.parties.map(p => {
      if (p.id !== partyId) return p

      const party = { ...p, votes: { ...p.votes, [placeId]: value } }
      party.totalVotes = Object.keys(party.votes).reduce(
        (accum, key) => accum + party.votes[key],
        0
      )
      return party
    })
    setConfig({
      ...config,
      parties: dhondtCalculation(newParties, config.totalSeats, config.cutOut),
    })
  }

  const allPartiesVotes = parties.reduce((accum, p) => {
    return accum + (p.totalVotes || 0)
  }, 0)

  const minimumVotesToAvoidCutOut = Math.round(
    (allPartiesVotes * config.cutOut) / 100
  )

  return (
    <ColumnLayout>
      <Text>
        Mínim de vots per a poder obtenir regidors: {minimumVotesToAvoidCutOut}
      </Text>
      <VoteCountingTable>
        <thead>
          <tr>
            <th>Col·legis | Partits</th>
            {parties.map(party => (
              <th>{party.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {places.map(place => (
            <tr>
              <td>{place.name}</td>
              {parties.map(party => (
                <td>
                  <TextInput
                    value={party.votes[place.id]}
                    onChange={e =>
                      updateVotes(
                        party.id,
                        place.id,
                        parseInt(e.target.value || 0)
                      )
                    }
                    type="number"
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th>Total partit</th>
            {parties.map(party => (
              <td>
                <Bold strike={party.totalVotes < minimumVotesToAvoidCutOut}>
                  {party.totalVotes}
                </Bold>
              </td>
            ))}
          </tr>
          <tr>
            <th>Regidors</th>
            {parties.map(party => (
              <td>
                <strong>{party.seats}</strong>
              </td>
            ))}
          </tr>
        </tbody>
      </VoteCountingTable>
    </ColumnLayout>
  )
}

export { Form }
