import React, { useEffect } from "react"
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

const Configuration = ({
  onConfigurationSave,
  config,
  admin,
  copyDataToANewSession,
}) => {
  const [seatsNumber, setSeatsNumber] = useSeats(config.totalSeats)
  const [cutOutPercentage, setCutOutPercentage] = useCutOutPercentage(
    config.cutOut
  )
  const [
    parties,
    addParty,
    removeParty,
    updateParty,
    setParties,
  ] = useCollection(config.parties)
  const [places, addPlace, removePlace, updatePlace, setPlaces] = useCollection(
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

  useEffect(() => {
    setSeatsNumber({ target: { value: config.totalSeats } })
    setCutOutPercentage({ target: { value: config.cutOut } })
    setParties(config.parties)
    setPlaces(config.places)
  }, [config])

  const currentDataFormatted = () => ({
    totalSeats: seatsNumber,
    cutOut: cutOutPercentage,
    parties: dhondtCalculation(parties, seatsNumber, cutOutPercentage),
    places: places,
  })

  const onSave = () => {
    onConfigurationSave(currentDataFormatted())
  }

  const onDuplicatingSession = () => {
    copyDataToANewSession(currentDataFormatted())
  }

  const Step = steps[currentStep]

  return (
    <FormWrapper>
      <PaginationButtons>
        <Button onClick={nextStep} disabled={firstStep()}>
          <span
            role="img"
            aria-label="arrow-left"
            style={{ display: "inline-block" }}
          >
            ⬅️
          </span>{" "}
          Enrere
        </Button>
        <Button onClick={previousStep} disabled={lastStep()}>
          Continua{" "}
          <span
            role="img"
            aria-label="arrow-right"
            style={{ display: "inline-block" }}
          >
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

      <Button primary disabled={!admin} onClick={onSave}>
        <span
          role="img"
          aria-label="disquette"
          style={{ display: "inline-block" }}
        >
          💾
        </span>
        Guardar!
      </Button>
      {!admin && (
        <Button secondary onClick={onDuplicatingSession}>
          <span
            role="img"
            aria-label="pencil-and-paper"
            style={{ display: "inline-block" }}
          >
            📝
          </span>
          Copiar les dades a una nova sessió
        </Button>
      )}
    </FormWrapper>
  )
}

export { Configuration }
