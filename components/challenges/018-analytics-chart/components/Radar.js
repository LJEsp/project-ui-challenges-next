import React from "react";
import { Radar as ChartRadar } from "react-chartjs-2";
import chartOptions from "../chartOptions";
import theme from "./theme";

const data = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running"
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: theme.backgroundColorTransparent[0],
      borderColor: theme.borderColor[0],
      pointBackgroundColor: theme.pointBackgroundColor[0],
      pointBorderColor: theme.pointBorderColor[0],
      pointHoverBackgroundColor: theme.pointHoverBackgroundColor[0],
      pointHoverBorderColor: theme.backgroundColor[0],
      pointBorderWidth: 2,
      pointRadius: 2,
      pointHoverRadius: 4,
      pointHitRadius: 36,
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: "My Second dataset",
      backgroundColor: theme.backgroundColorTransparent[1],
      borderColor: theme.borderColor[1],
      pointBackgroundColor: theme.pointBackgroundColor[1],
      pointBorderColor: theme.pointBorderColor[1],
      pointHoverBackgroundColor: theme.pointHoverBackgroundColor[1],
      pointHoverBorderColor: theme.pointHoverBorderColor[1],
      pointBorderWidth: 2,
      pointRadius: 2,
      pointHoverRadius: 4,
      pointHitRadius: 36,
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};
const Radar = () => {
  return <ChartRadar data={data} options={chartOptions} />;
};

export default Radar;
