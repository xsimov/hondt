import React from "react"
import styled from "@emotion/styled"

import VotingPlace from "./components/VotingPlace"
import Button from "mineral-ui/Button/Button"
import Text from "mineral-ui/Text/Text"

const Section = styled.section`
  margin-bottom: 1rem;
`

const VotingPlacesGenerator = ({
  places,
  addPlace,
  removePlace,
  updatePlace,
}) => (
  <Section>
    <Text as="h3">Col·legis electorals</Text>
    {places.map(place => (
      <VotingPlace
        place={place}
        key={place.id}
        updatePlace={updatePlace}
        removePlace={() => removePlace(place.id)}
      />
    ))}
    <Button onClick={addPlace}>Afegir Col·legi</Button>
  </Section>
)

export default VotingPlacesGenerator
