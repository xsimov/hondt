import React from "react"
import styled from "@emotion/styled"
import Button from "mineral-ui/Button"

import {
  useCutOutPercentage,
  useSeats,
  useCollection,
  useSteps,
} from "./steps/ConfigurationContext"

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const PaginationButtons = styled.div`
  display: flex;
  margin-bottom: 1rem;

  button {
    display: flex;
    flex: 1;
  }
`

const Configuration = () => {
  const [seatsNumber, setSeatsNumber] = useSeats()
  const [cutOutPercentage, setCutOutPercentage] = useCutOutPercentage()
  const [parties, addParty, removeParty, updateParty] = useCollection()
  const [places, addPlace, removePlace, updatePlace] = useCollection()
  const [
    currentStep,
    nextStep,
    previousStep,
    steps,
    firstStep,
    lastStep,
  ] = useSteps()

  const onSave = () => {
    console.log(seatsNumber, cutOutPercentage)
    console.table(parties)
    console.table(places)
  }

  const Step = steps[currentStep]

  return (
    <FormWrapper>
      <Step
        setCutOutPercentage={setCutOutPercentage}
        setSeatsNumber={setSeatsNumber}
        seatsNumber={seatsNumber}
        cutOutPercentage={cutOutPercentage}
        parties={parties}
        addParty={addParty}
        removeParty={removeParty}
        updateParty={updateParty}
        places={places}
        addPlace={addPlace}
        removePlace={removePlace}
        updatePlace={updatePlace}
      />
      <PaginationButtons>
        <Button onClick={nextStep} disabled={firstStep()}>
          Enrere
        </Button>
        <Button onClick={previousStep} disabled={lastStep()}>
          Continua
        </Button>
      </PaginationButtons>

      {lastStep() && (
        <Button primary onClick={onSave}>
          Comença!
        </Button>
      )}
    </FormWrapper>
  )
}

export { Configuration }
