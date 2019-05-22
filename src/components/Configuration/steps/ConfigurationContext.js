import { useState } from "react"
import NumberOfSeats from "./NumberOfSeats"
import PartiesGenerator from "./PartiesGenerator"
import VotingPlacesGenerator from "./VotingPlacesGenerator"

let nextId = 1

const useCollection = initialValue => {
  const [collection, setCollection] = useState(initialValue)

  const updateElementAttribute = (id, property, value) => {
    const newCollection = collection.map(element => {
      if (element.id !== id) return element

      element[property] = value
      return element
    })
    setCollection(newCollection)
  }

  const addElement = () => {
    setCollection([
      ...collection,
      {
        id: nextId,
        name: "",
        color: "",
      },
    ])
    nextId += 1
  }

  const removeElement = elementId => {
    setCollection(collection.filter(element => element.id !== elementId))
  }

  return [collection, addElement, removeElement, updateElementAttribute]
}

const useSeats = initialValue => {
  const [seatsNumber, setSeatsNumber] = useState(initialValue)

  const onChangingSeats = event => {
    setSeatsNumber(parseInt(event.target.value))
  }

  return [seatsNumber, onChangingSeats]
}

const useCutOutPercentage = initialValue => {
  const [cutOutPercentage, setCutOutPercentage] = useState(initialValue)

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
export { useCollection, useSeats, useCutOutPercentage, useSteps }
