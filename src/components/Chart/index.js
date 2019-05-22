import React, { useRef, useEffect } from "react"
import Chart from "chart.js"

const MyChart = () => {
  const node = useRef(null)
  const datasets = [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 206, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(255, 159, 64)",
      ],
      borderAlign: "inner",
    },
    {
      label: "# of Votes",
      data: [1, 13, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255,0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
    },
  ]

  useEffect(() => {
    new Chart(node.current.getContext("2d"), {
      type: "doughnut",
      data: {
        datasets: datasets,
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      },
      options: {
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
