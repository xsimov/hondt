import React from "react"
import styled from "@emotion/styled"
import TextInput from "mineral-ui/TextInput"

const VoteCountingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;

  th,
  td {
    padding: 5px;
    border: 1px solid black;
  }
`
const Form = ({ config, setConfig }) => {
  const { parties, places } = config
  const updateParty = (id, attribute, value) => {
    const newParties = config.parties.map(p => {
      if (p.id !== id) return p

      return { ...p, [attribute]: value }
    })

    setConfig({ ...config, parties: newParties })
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
                  value={party.seats}
                  onChange={e => updateParty(party.id, "seats", e.target.value)}
                  type="number"
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </VoteCountingTable>
  )
}

export { Form }
