import React from "react"
import styled from "@emotion/styled"
import Button from "mineral-ui/Button"
import Text from "mineral-ui/Text/Text"
import TextInput from "mineral-ui/TextInput"

const HorizontalLabel = styled.label`
  display: flex;
  flex-direction: row;
  margin-right: 1rem;
  align-items: center;
`

const HorizontalText = styled(Text)`
  margin: 0 1rem 0 0;
`
const ShortInput = styled(TextInput)`
  width: 5rem;
`

const Party = ({ party, removeParty, updateParty, className }) => (
  <div className={className}>
    <HorizontalLabel>
      <HorizontalText>Nom:</HorizontalText>
      <TextInput
        value={party.name}
        onChange={e => updateParty(party.id, "name", e.target.value)}
      />
    </HorizontalLabel>
    <HorizontalLabel>
      <HorizontalText>Color:</HorizontalText>
      <ShortInput
        type="color"
        value={party.color || "#FFFFFF"}
        onChange={e => updateParty(party.id, "color", e.target.value)}
      />
    </HorizontalLabel>
    <HorizontalLabel>
      <HorizontalText>Regidors actuals:</HorizontalText>
      <ShortInput
        value={party.oldSeats}
        type="number"
        onChange={e => updateParty(party.id, "oldSeats", e.target.value)}
      />
    </HorizontalLabel>
    <Button variant="danger" onClick={removeParty}>
      Esborrar partit
    </Button>
  </div>
)

const StyledParty = styled(Party)`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`
export default StyledParty
