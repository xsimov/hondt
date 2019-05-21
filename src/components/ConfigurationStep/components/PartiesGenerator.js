import React, { useState } from "react"
import styled from "@emotion/styled"

import Party from "./Party"
import Button from "mineral-ui/Button/Button"
import Text from "mineral-ui/Text/Text"

let nextId = 1

const useParties = () => {
  const [parties, setParties] = useState([])

  const addParty = () => {
    setParties([...parties, { id: nextId }])
    nextId += 1
  }

  const removeParty = partyId => {
    setParties(parties.filter(party => party.id !== partyId))
  }

  return [parties, addParty, removeParty]
}

const Section = styled.section`
  margin-bottom: 1rem;
`

const PartiesGenerator = () => {
  const [parties, addParty, removeParty] = useParties()

  return (
    <Section>
      <Text as="h3">Partits</Text>
      {parties.map(party => (
        <Party
          party={party}
          key={party.id}
          removeParty={() => removeParty(party.id)}
        />
      ))}
      <Button onClick={addParty}>Afegir Partit</Button>
    </Section>
  )
}

export default PartiesGenerator
