import React from "react";
import { HorizontalBar as ChartHorizontalBar } from "react-chartjs-2";
import chartOptions from "../chartOptions";
import theme from "./theme";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data 1",
      backgroundColor: theme.backgroundColorTransparent[0],
      borderColor: theme.borderColor[0],
      borderWidth: 1,
      hoverBackgroundColor: theme.hoverBackgroundColor[0],
      hoverBorderColor: theme.hoverBorderColor,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "Data 2",
      backgroundColor: theme.backgroundColorTransparent[1],
      borderColor: theme.borderColor[1],
      borderWidth: 2,
      hoverBackgroundColor: theme.hoverBackgroundColor[1],
      hoverBorderColor: theme.hoverBorderColor,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "Data 1",
      backgroundColor: theme.backgroundColorTransparent[2],
      borderColor: theme.borderColor[2],
      borderWidth: 2,
      hoverBackgroundColor: theme.hoverBackgroundColor[2],
      hoverBorderColor: theme.hoverBorderColor,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const HorizontalBar = () => {
  return <ChartHorizontalBar 
  height={null} width={null} 
  data={data} options={chartOptions} />;
};

export default HorizontalBar;
