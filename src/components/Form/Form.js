import React from "react"
import styled from "@emotion/styled"
import TextInput from "mineral-ui/TextInput"
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
const Form = ({ config, setConfig }) => {
  const { parties, places } = config
  const updateVotes = (partyId, placeId, value) => {
    const newParties = config.parties.map(p => {
      if (p.id !== partyId) return p

      return { ...p, votes: { ...p.votes, [placeId]: value } }
    })
    setConfig({
      ...config,
      parties: dhondtCalculation(newParties, config.totalSeats),
    })
  }

  return (
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
                    updateVotes(party.id, place.id, parseInt(e.target.value))
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
              {Object.keys(party.votes).reduce(
                (accum, key) => accum + party.votes[key],
                0
              )}
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
  )
}

export { Form }
