import React from "react"
import styled from "@emotion/styled"
import Button from "mineral-ui/Button"
import { dhondtCalculation } from "../../utils"

import {
  useCutOutPercentage,
  useSeats,
  useCollection,
  useSteps,
} from "./steps/ConfigurationContext"

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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
  const [seatsNumber, setSeatsNumber] = useSeats(config.totalSeats)
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
      totalSeats: seatsNumber,
      cutOut: cutOutPercentage,
      parties: dhondtCalculation(parties, seatsNumber, cutOutPercentage),
      places: places,
    })
  }

  const Step = steps[currentStep]

  return (
    <FormWrapper>
      <PaginationButtons>
        <Button onClick={nextStep} disabled={firstStep()}>
          <span role="img" aria-label="arrow-left">
            ⬅️
          </span>{" "}
          Enrere
        </Button>
        <Button onClick={previousStep} disabled={lastStep()}>
          Continua{" "}
          <span role="img" aria-label="arrow-right">
            ➡️
          </span>
        </Button>
      </PaginationButtons>
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

      <Button primary onClick={onSave}>
        <span role="img" aria-label="disquette">
          💾
        </span>
        Guardar!
      </Button>
    </FormWrapper>
  )
}

export { Configuration }
