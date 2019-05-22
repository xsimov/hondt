import React, { useRef, useEffect } from "react"
import Chart from "chart.js"
import lightenColor from "./lightenColor"

const MyChart = ({ parties }) => {
  const sortedBySeats = [...parties].sort((a, b) => b.seats - a.seats)
  const sortedByOldSeats = [...parties].sort((a, b) => b.oldSeats - a.oldSeats)

  const node = useRef(null)
  const datasets = [
    {
      data: sortedBySeats.map(p => p.seats),
      backgroundColor: sortedBySeats.map(p => p.color),
      labels: sortedBySeats.map(p => p.name),
    },
    {
      data: sortedByOldSeats.map(p => p.oldSeats),
      backgroundColor: sortedByOldSeats.map(p => lightenColor(p.color)),
      labels: sortedByOldSeats.map(p => p.name + " [2015]"),
    },
  ]

  useEffect(() => {
    new Chart(node.current.getContext("2d"), {
      type: "doughnut",
      data: {
        datasets: datasets,
      },
      options: {
        tooltips: {
          callbacks: {
            label: (item, data) => {
              return (
                data.datasets[item.datasetIndex].labels[item.index] +
                ": " +
                data.datasets[item.datasetIndex].data[item.index]
              )
            },
          },
        },
        circumference: Math.PI,
        rotation: Math.PI,
        cutoutPercentage: 40,
        elements: {
          arc: {
            backgroundColor: "rgba(0,0,0,0.1)",
            borderAlign: "inner",
            borderColor: "#fff",
            borderWidth: 2,
          },
        },
      },
    })
  })

  return <canvas ref={node} height="100%" width="100%" />
}

export default MyChart
