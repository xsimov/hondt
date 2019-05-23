import React, { useState } from "react"
import styled from "@emotion/styled"

import Party from "./components/Party"
import Button from "mineral-ui/Button"
import Checkbox from "mineral-ui/Checkbox"
import Text from "mineral-ui/Text"

const Section = styled.section`
  margin-bottom: 1rem;
`

const PartiesGenerator = ({ parties, addParty, removeParty, updateParty }) => (
  <Section>
    <Text as="h3">Partits</Text>
    {parties.map(party => (
      <Party
        party={party}
        updateParty={updateParty}
        key={party.id}
        removeParty={() => removeParty(party.id)}
      />
    ))}
    <Button onClick={addParty}>Afegir Partit</Button>
  </Section>
)

export default PartiesGenerator
