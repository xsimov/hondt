import React from "react"

const DHondtRow = ({ config }) => {
  const newParties = hondt(config.parties, config.totalSeats)

  return (
    <>
      <td>{newParties[0].seats}</td>
      <td>{newParties[1].seats}</td>
      <td>{newParties[2].seats}</td>
    </>
  )
}

export { DHondtRow }
