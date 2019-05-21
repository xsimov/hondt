import { useState } from "react"

let nextId = 1

const useCollection = () => {
  const [collection, setCollection] = useState([])

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

export { useCollection }
