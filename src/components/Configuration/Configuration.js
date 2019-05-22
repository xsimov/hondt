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

const Configuration = ({ onConfigurationSave, config }) => {
  console.log(config)
  const [seatsNumber, setSeatsNumber] = useSeats(config.seats)
  const [cutOutPercentage, setCutOutPercentage] = useCutOutPercentage(
    config.cutOut
  )
  const [parties, addParty, removeParty, updateParty] = useCollection(
    config.parties
  )
  const [places, addPlace, removePlace, updatePlace] = useCollection(
    config.places
  )
  const [
    currentStep,
    nextStep,
    previousStep,
    steps,
    firstStep,
    lastStep,
  ] = useSteps()

  const onSave = () => {
    onConfigurationSave({
      seats: seatsNumber,
      cutOut: cutOutPercentage,
      parties: parties,
      places: places,
    })
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
