import React, { useState } from "react"
import styled from "@emotion/styled"
import Button from "mineral-ui/Button"

import NumberOfSeats from "./steps/NumberOfSeats"
import PartiesGenerator from "./steps/PartiesGenerator"
import VotingPlacesGenerator from "./steps/VotingPlacesGenerator"
import { useCollection } from "./steps/ConfigurationContext"

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const useSeats = () => {
  const [seatsNumber, setSeatsNumber] = useState(21)

  const onChangingSeats = event => {
    setSeatsNumber(parseInt(event.target.value))
  }

  return [seatsNumber, onChangingSeats]
}

const useCutOutPercentage = () => {
  const [cutOutPercentage, setCutOutPercentage] = useState(3)

  const onChangingCutOutPercentage = event => {
    setCutOutPercentage(parseInt(event.target.value))
  }

  return [cutOutPercentage, onChangingCutOutPercentage]
}

const useSteps = () => {
  const [step, setStep] = useState(0)
  const steps = [NumberOfSeats, PartiesGenerator, VotingPlacesGenerator]

  const nextStep = () => {
    setStep(step + 1)
  }

  const previousStep = () => {
    step !== 0 && setStep(step - 1)
  }

  const firstStep = () => step === 0
  const lastStep = () => step === steps.length - 1

  return [step, previousStep, nextStep, steps, firstStep, lastStep]
}

const PaginationButtons = styled.div`
  display: flex;
  margin-bottom: 1rem;

  button {
    display: flex;
    flex: 1;
  }
`

const ConfigurationSteps = () => {
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
    console.log(seatsNumber, cutOutPercentage, parties, places)
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

export { ConfigurationSteps }
