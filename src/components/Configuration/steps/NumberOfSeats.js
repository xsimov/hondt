import React from "react"
import styled from "@emotion/styled"
import TextInput from "mineral-ui/TextInput"
import Text from "mineral-ui/Text"
import { FormField as MineralFormField } from "mineral-ui/Form"

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

const NumberOfSeats = ({
  seatsNumber,
  setSeatsNumber,
  cutOutPercentage,
  setCutOutPercentage,
}) => (
  <FormWrapper>
    <Text as="h3">Regidors</Text>
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
  </FormWrapper>
)

export default NumberOfSeats
