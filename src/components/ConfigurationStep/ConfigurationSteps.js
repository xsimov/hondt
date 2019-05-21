import React, { useState } from "react"
import styled from "@emotion/styled"
import Button from "mineral-ui/Button"

import { StepOne } from "./steps/StepOne"

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
  const steps = [StepOne]

  const nextStep = () => {
    setStep(step + 1)
  }

  const previousStep = () => {
    step != 0 && setStep(step - 1)
  }

  return [step, previousStep, nextStep, steps]
}

const PaginationButtons = styled.div`
  display: flex;

  button {
    display: flex;
    flex: 1;
  }
`

const ConfigurationSteps = () => {
  const [seatsNumber, setSeatsNumber] = useSeats()
  const [cutOutPercentage, setCutOutPercentage] = useCutOutPercentage()
  const [currentStep, nextStep, previousStep, steps] = useSteps()

  const onSave = () => {
    console.log(seatsNumber, cutOutPercentage)
  }

  const Step = steps[currentStep]

  return (
    <FormWrapper>
      <Step
        setCutOutPercentage={setCutOutPercentage}
        setSeatsNumber={setSeatsNumber}
        seatsNumber={seatsNumber}
        cutOutPercentage={cutOutPercentage}
      />
      {steps.length < currentStep ? (
        <PaginationButtons>
          <Button onClick={previousStep}>Enrere</Button>
          <Button onClick={nextStep}>Continua</Button>
        </PaginationButtons>
      ) : (
        <Button primary onClick={onSave}>
          Comença!
        </Button>
      )}
    </FormWrapper>
  )
}

export { ConfigurationSteps }
