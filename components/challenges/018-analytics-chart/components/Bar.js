import React from "react";
import { Bar as ChartBar } from "react-chartjs-2";
import chartOptions from "../chartOptions";
import theme from "./theme";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data 1",
      backgroundColor: theme.backgroundColorTransparent[0],
      borderColor: theme.borderColor[0],
      borderWidth: 2,
      hoverBackgroundColor: theme.hoverBackgroundColorTransparent[0],
      hoverBorderColor: theme.hoverBorderColor[0],
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "Data 2",
      backgroundColor: theme.backgroundColorTransparent[1],
      borderColor: theme.borderColor[1],
      borderWidth: 2,
      hoverBackgroundColor: theme.hoverBackgroundColorTransparent[1],
      hoverBorderColor: theme.hoverBorderColor[1],
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "Data 1",
      backgroundColor: theme.backgroundColorTransparent[2],
      borderColor: theme.borderColor[2],
      borderWidth: 2,
      hoverBackgroundColor: theme.hoverBackgroundColorTransparent[2],
      hoverBorderColor: theme.hoverBorderColor[2],
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const Bar = () => {
  return <ChartBar data={data} options={chartOptions} />;
};

export default Bar;
