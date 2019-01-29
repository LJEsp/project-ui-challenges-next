import React from "react";
import { Pie as ChartPie } from "react-chartjs-2";
import chartOptions from "../chartOptions";
import theme from "./theme";

const data = {
  labels: ["Data 1", "Data 2", "Data 3"],
  datasets: [
    {
      data: [1, 2, 3],
      backgroundColor: theme.backgroundColor,
      hoverBackgroundColor: theme.hoverBackgroundColor,
      hoverBorderColor: theme.hoverBorderColor
      // hoverBorderWidth: [4, 4, 4]
    }
  ],
  animation: {
    animateScale: true
  }
};

const Pie = () => {
  return (
    <ChartPie
      height={null} width={null}
      data={data}
      options={chartOptions}
    />
  );
};

export default Pie;
