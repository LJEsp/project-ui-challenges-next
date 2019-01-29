import React from "react";
import { Line as ChartLine } from "react-chartjs-2";
import chartOptions from "../chartOptions";
import theme from "./theme";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data 1",
      fill: false,
      lineTension: 0.1,
      backgroundColor: theme.backgroundColor[0],
      borderColor: theme.borderColor[0],
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: theme.pointBorderColor[0],
      pointBackgroundColor: theme.pointBackgroundColor[0],
      pointBorderWidth: 2,
      pointRadius: 2,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: theme.pointHoverBackgroundColor[0],
      pointHoverBorderColor: theme.pointHoverBorderColor[0],
      pointHoverBorderWidth: 2,
      pointHitRadius: 36,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "Data 2",
      fill: false,
      lineTension: 0.1,
      backgroundColor: theme.backgroundColor[1],
      borderColor: theme.borderColor[1],
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: theme.pointBorderColor[1],
      pointBackgroundColor: theme.pointBackgroundColor[1],
      pointBorderWidth: 2,
      pointRadius: 2,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: theme.pointHoverBackgroundColor[1],
      pointHoverBorderColor: theme.pointHoverBorderColor[1],
      pointHoverBorderWidth: 2,
      pointHitRadius: 36,
      data: [3, 52, 32, 53, 64, 77, 6]
    },
    {
      label: "Data 3",
      fill: false,
      lineTension: 0.1,
      backgroundColor: theme.backgroundColor[2],
      borderColor: theme.borderColor[2],
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: theme.pointBorderColor[2],
      pointBackgroundColor: theme.pointBackgroundColor[2],
      pointBorderWidth: 2,
      pointRadius: 2,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: theme.pointHoverBackgroundColor[2],
      pointHoverBorderColor: theme.pointHoverBorderColor[2],
      pointHoverBorderWidth: 2,
      pointHitRadius: 36,
      data: [55, 46, 37, 50, 64, 68, 63]
    }
  ]
};

const Line = () => {
  return (
    <ChartLine 
    height={null} width={null} 
    data={data} options={chartOptions} />
  );
};

export default Line;
