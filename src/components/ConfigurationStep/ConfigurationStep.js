import React, { useState } from "react"
import styled from "@emotion/styled"
import TextInput from "mineral-ui/TextInput"
import Button from "mineral-ui/Button"
import { FormField as MineralFormField } from "mineral-ui/Form"

import PartiesGenerator from "./components/PartiesGenerator"

const NumberInput = styled(TextInput)`
  input {
    text-align: right;
  }
`

const FormField = styled(MineralFormField)`
  margin-bottom: 1rem;
`

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

const ConfigurationStep = () => {
  const [seatsNumber, setSeatsNumber] = useSeats()
  const [cutOutPercentage, setCutOutPercentage] = useCutOutPercentage()

  const onSave = () => {
    console.log(seatsNumber, cutOutPercentage)
  }

  return (
    <FormWrapper>
      <FormField label="Número de regidors">
        <NumberInput
          type="number"
          value={seatsNumber}
          onChange={setSeatsNumber}
        />
      </FormField>
      <FormField label="Barrera electoral">
        <NumberInput
          type="number"
          suffix="%"
          value={cutOutPercentage}
          onChange={setCutOutPercentage}
        />
      </FormField>
      <PartiesGenerator onPartyCreation={() => {}} />
      <Button primary onClick={onSave}>
        Comença!
      </Button>
    </FormWrapper>
  )
}

export { ConfigurationStep }
