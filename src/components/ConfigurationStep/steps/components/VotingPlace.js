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
const ColorInput = styled(TextInput)`
  width: 5rem;
`

const VotingPlace = ({ place, removePlace, updatePlace, className }) => (
  <div className={className}>
    <HorizontalLabel>
      <HorizontalText>Nom:</HorizontalText>
      <TextInput
        onChange={e => updatePlace(place.id, "name", e.target.value)}
        value={place.name}
      />
    </HorizontalLabel>
    <Button variant="danger" onClick={removePlace}>
      Esborrar col·legi
    </Button>
  </div>
)

const StyledVotingPlace = styled(VotingPlace)`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`
export default StyledVotingPlace
