import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import destyle from "../../../utils/destyle";
import { defaults } from "react-chartjs-2";
import Doughnut from "./components/Doughnut";
import Pie from "./components/Pie";
import Line from "./components/Line";
import Bar from "./components/Bar";
import HorizontalBar from "./components/HorizontalBar";
import Radar from "./components/Radar";

defaults.global.defaultFontColor = "black";
defaults.global.defaultFontFamily = "Montserrat, sans-serif";
// defaults.global.defaultFontStyle = "bold";
// defaults.global.elements.rectangle.backgroundColor = "#ff0000";
// defaults.global.elements.rectangle.borderColor = "#0000ff";
// defaults.global.elements.rectangle.borderWidth = 2;
// defaults.global.elements.arc.backgroundColor = "#ff0000";
// defaults.global.elements.arc.borderColor = "#0000ff";
// defaults.global.elements.arc.borderWidth = 2;

defaults.doughnut.animation.animateRotate = true;
defaults.doughnut.animation.animateScale = true;

const PageStyle = createGlobalStyle`
  ${destyle}

  html, body, #__next {
    width: 100%;
    height: 100%
  }

  body {
    font-family: "Montserrat", sans-serif;
  }

  h2 { 
    font-size: 1.3125em;
    margin-bottom: 0.5em;
    font-weight: 700;
  }

  .myChartDiv canvas {
    width: 100%;
  }
`;

const StyledAnalyticsChart = styled.div`
  /* border: 1px solid cyan; */
  padding: 1.5em;

  .row {
    display: flex;
    margin-bottom: 1.5em;

    > * {
      width: 50%;
    }
  }

  .chart-container {
    text-align: center;
    /* display: flex;
    flex-flow: column; */
    /* margin-bottom: 1.5em; */
  }

  .chart-box {
    /* flex-grow: 1; */
    /* border: 1px solid magenta; */
    /* height: 16em; */
  }
`;

export class AnalyticsChart extends Component {
  render() {
    return (
      <StyledAnalyticsChart>
        <PageStyle />

        <div className="row">
          <section className="chart-container">
            <h2>Doughnut</h2>
            <div className="chart-box">
              <Doughnut />
            </div>
          </section>

          <section className="chart-container">
            <h2>Pie</h2>
            <div className="chart-box">
              <Pie />
            </div>
          </section>
        </div>

        <div className="row">
          <section className="chart-container">
            <h2>Line</h2>
            <div className="chart-box">
              <Line />
            </div>
          </section>

          <section className="chart-container">
            <h2>Bar</h2>
            <div className="chart-box">
              <Bar />
            </div>
          </section>
        </div>

        <div className="row">
          <section className="chart-container">
            <h2>Horizontal Bar</h2>
            <div className="chart-box">
              <HorizontalBar />
            </div>
          </section>

          <section className="chart-container">
            <h2>Radar</h2>
            <div className="chart-box">
              <Radar />
            </div>
          </section>
        </div>
      </StyledAnalyticsChart>
    );
  }
}

export default AnalyticsChart;
