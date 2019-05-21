import React, { useState } from "react"
import styled from "@emotion/styled"
import TextInput from "mineral-ui/TextInput"
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
const StepOne = ({
  seatsNumber,
  setSeatsNumber,
  cutOutPercentage,
  setCutOutPercentage,
}) => (
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
  </FormWrapper>
)

export { StepOne }
