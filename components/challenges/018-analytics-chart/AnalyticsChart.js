import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Spring, animated, config } from "react-spring";
import destyle from "../../../utils/destyle";
import Bar from "./components/Bar";
import Doughnut from "./components/Doughnut";
import Pie from "./components/Pie";

const theme = {
  color: {
    primary: "#2979FF",
    light: "#FFFFFF",
    dark: "#212121",
    grey: {
      light: "#E0E0E0",
      medium: "#757575",
      dark: "#424242"
    },
    white: "#FFFFFF"
  },
  size: {
    xs: "0.25em", // 4
    s: "0.5em", // 8
    m: "1em", // 16
    l: "2em", // 32
    xl: "4em" // 64
  },
  em: px => `${px / 16}em`,
  breakpoint: {
    first: "37.5rem"
  }
};

const PageStyle = createGlobalStyle`
  ${destyle}    

  html, body, #__next {
    width: 100%;
  }

  body {
    font-family: "Montserrat", sans-serif;
    color: ${theme.color.dark};
  }


`;

const StyledAnalyticsChart = styled.div`
  margin-bottom: ${theme.size.l};

  .header-container {
    background-color: ${theme.color.dark};
    height: ${theme.size.xl};
    padding: ${theme.size.s} ${theme.size.l};
    color: ${theme.color.light};
    display: flex;
    ${"" /* align-items: center; */}
  }

  .logo-box {
    display: flex;
    align-items: center;
    margin-right: ${theme.size.xl};

    .logo-text {
      font-weight: 700;
    }
  }

  .header-nav-section {
    display: flex;

    &--right {
      margin-left: auto;
    }
  }

  .header-nav-box {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: ${theme.size.m};
    }
  }

  .header-nav-section--right .header-nav-box:not(:last-child) {
      margin-right: ${theme.size.l};
  }

  .button-nav {
    color: ${theme.color.grey.light};
    padding: ${theme.size.s};

    &--dark {
      color: ${theme.color.grey.dark};
    }

    &--active {
      color: ${theme.color.primary};
      font-weight: 700;
    }
  }

  .button-fill {
    background-color: ${theme.color.primary};
    padding: ${theme.size.s} ${theme.size.m};
    border-radius: ${theme.size.xs};
    color: ${theme.color.light};
  }

  .avatar {
    width: ${theme.em(40)};
    height: ${theme.em(40)};
    overflow: hidden;
    border-radius: 1000em;

    &__image {
      width: 100%;
      object-fit: cover;
    }
  }

  .main-container {
    width: 62%;
    margin: 0 auto;
    display: grid;
  }

  .main-header-container {
    padding-top: ${theme.size.l};
    /* padding-right: ${theme.size.xl}; */
    /* padding-left: ${theme.size.xl}; */
    display: flex;
    justify-content: space-between;
    margin-bottom: ${theme.size.m};
  }

  .main-header-section {

  }

  .main-header-box {
    display: flex;
    align-items: center;
    margin-bottom: ${theme.size.xs};

    > *:not(:last-child) {
      ${"" /* border: 1px solid magenta; */}
      margin-right: ${theme.size.xs};
    }
  }

  .text-h2 {
    font-size: 2em;
  }

  .text-subtle {
    color: ${theme.color.grey.medium};
  }

  .button-text {
    color: ${theme.color.primary};
    padding: ${theme.size.s};

    &--active {
      font-weight: 700;
    }
  }

  .button-outline {
    color: ${theme.color.primary};
    padding: ${theme.size.xs} ${theme.size.s};
    border: 1px solid ${theme.color.primary};
    border-radius: ${theme.size.s};
    text-transform: uppercase;
  }

  .main-nav-container {
    /* padding-right: ${theme.size.xl}; */
    /* padding-left: ${theme.size.xl}; */
    padding-bottom: ${theme.size.s};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid ${theme.color.grey.light};
    margin-bottom: ${theme.size.l};
  }

  .main-nav-section {
    display: flex;
    align-items: flex-end;
  }

  .main-nav-box {
    &:not(:last-child) {
      ${"" /* border: 1px solid magenta; */}
      margin-right: ${theme.size.l};
    }
  }

  .section-1-container {
    /* margin-right: ${theme.size.xl}; */
    /* margin-left: ${theme.size.xl}; */
    margin-bottom: ${theme.size.l};
    display: grid;
    grid-template-columns: 33.333333% 1fr;
    border-bottom: 1px solid ${theme.color.grey.light};

    > *:first-child {
      margin-right: ${theme.size.m};
    }
  }

  .section-1-section {
  }

  .section-1-box {
    &:not(:last-child) {
      margin-bottom: ${theme.size.m};
    }

    &:first-child {
      margin-bottom: ${theme.size.s};
    }

    &:last-child {
      margin-top: ${theme.size.l};
    }
  }

  .text-h1 {
    font-size: 3em;
  }

  .text-subtitle {
    font-weight: 700;
  }

  .text {
    line-height: 1.5;

    &--bold {
      font-weight: 700;
    }
  }

  .row {
    /* padding-right: ${theme.size.xl}; */
    /* padding-left: ${theme.size.xl}; */

    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .section-2-container {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto auto;
    border-right: 1px solid ${theme.color.grey.light};
    margin-right: ${theme.size.l};

    > * {
      grid-column: 1 / 2;
    }

    > *:first-child {
      margin-bottom: ${theme.size.s};
    }

    > *:nth-child(2) {
      margin-bottom: ${theme.size.m};
    }
    
    > *:last-child {
      grid-column: 2 / -1;
      grid-row: 3 / -1;
    }
  }

  .section-2-box {

  }

  .section-3-container {
    > *:not(:last-child) {
      margin-bottom: ${theme.size.m};
    }

    > *:first-child {
      margin-bottom: ${theme.size.s};
    }

    > *:last-child {
      margin-top: ${theme.size.l};
    }
  }

  .categories-table {
    /* border: 1px solid magenta; */
    width: 100%;

    .legend {
      width: ${theme.size.s};
      height: ${theme.size.s};
      background-color: red;
      margin-right: ${theme.size.s};
    }

    tr:nth-child(1) .legend {
      background-color: #FF6D00;
    }

    tr:nth-child(2) .legend {
      background-color: #FF4081;
    }

    tr:nth-child(3) .legend {
      background-color: #0091EA;
    }

    table {
      width: 100%;
    }

    td:first-child {
      vertical-align: middle;
    }

    td:nth-child(2) {
      padding-right: 0.5em;
    }

    td:nth-child(3) {
      padding-right: 0.5em;
    }

    tr {
      /* border: 1px solid magenta; */
      /* display: flex; */
      width: 100%;
    }

    td {
      /* display: flex; */
    }
    
  }
`;

export class AnalyticsChart extends Component {
  render() {
    return (
      <StyledAnalyticsChart>
        <PageStyle />

        <header className="header-container">
          <div className="logo-box">
            <span className="logo-text">Analytics Chart</span>
          </div>

          <nav className="header-nav-section">
            <div className="header-nav-box">
              <button className="button-nav">Home</button>
            </div>

            <div className="header-nav-box">
              <button className="button-nav">Settlements</button>
            </div>

            <div className="header-nav-box">
              <button className="button-nav">Transactions</button>
            </div>

            <div className="header-nav-box">
              <button className="button-nav">Insights</button>
            </div>

            <div className="header-nav-box">
              <button className="button-nav">Developer</button>
            </div>

            <div className="header-nav-box">
              <button className="button-nav">...</button>
            </div>
          </nav>

          <div className="header-nav-section header-nav-section--right">
            <div className="header-nav-box">
              <button className="button-fill">Capture Payments</button>
            </div>

            <div className="header-nav-box">
              <div className="icon">
                <i className="material-icons md-24">search</i>
              </div>
            </div>

            <div className="header-nav-box">
              <div className="icon">
                <i className="material-icons">notifications_none</i>
              </div>
            </div>

            <div className="header-nav-box">
              <div className="avatar">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY256_CR42,0,172,256_AL_.jpg"
                  alt=""
                  className="avatar__image"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="main-container">
          <header className="main-header-container">
            <section className="main-header-section">
              <div className="main-header-box">
                <h2 className="text-h2">Baseline Brooks</h2>
                <button className="button-outline">Pro</button>
              </div>

              <div className="main-header-box">
                <div className="icon">
                  <i className="material-icons">location_on</i>
                </div>
                <span className="text-subtle">
                  Vasagatan 12 C, Stockholm, Sweden
                </span>

                <div />
                <button className="button-text">Detailed Stats</button>
              </div>
            </section>

            <section className="main-header-section">
              <div className="main-header-box">
                <span className="text-subtle">Total Revenue</span>
              </div>

              <div className="main-header-box">
                <span className="text-h2">$115,346</span>
              </div>
            </section>
          </header>

          <nav className="main-nav-container">
            <div className="main-nav-section">
              <div className="main-nav-box">
                <button className="button-nav button-nav--dark button-nav--active">
                  Overview
                </button>
              </div>

              <div className="main-nav-box">
                <button className="button-nav button-nav--dark">Sales</button>
              </div>
              <div className="main-nav-box">
                <button className="button-nav button-nav--dark">
                  Conversions
                </button>
              </div>
            </div>

            <div className="main-nav-section">
              <div className="main-nav-box">
                <button className="button-text">Today</button>
              </div>

              <div className="main-nav-box">
                <button className="button-text button-text--active">
                  7 days
                </button>
              </div>

              <div className="main-nav-box">
                <button className="button-text">14 days</button>
              </div>

              <div className="main-nav-box">
                <button className="button-text">1 month</button>
              </div>
            </div>
          </nav>

          <section className="section-1-container">
            <div className="section-1-section">
              <div className="section-1-box">
                <h1 className="text-h1">12,020</h1>
              </div>

              <div className="section-1-box">
                <span className="text-subtitle">
                  Total amount of books sold (7 days)
                </span>
              </div>

              <div className="section-1-box">
                <p className="text">
                  Clients spent{" "}
                  <span className="text text--purple">$9,737 in average</span>{" "}
                  on books from your store this month compared to previous week.
                </p>
              </div>

              <div className="section-1-box">
                <button className="button-fill">Download report</button>
              </div>
            </div>

            <div className="section-1-section">
              <Bar />
            </div>
          </section>

          <div className="row">
            <section className="section-2-container">
              <div className="section-2-box">
                <h1 className="text-h1">Categories</h1>
              </div>

              <div className="section-2-box">
                <span className="text-subtitle">
                  Top book categories by sales (7 days)
                </span>
              </div>

              <div className="section-2-box">
                <div className="categories-table">
                  <table>
                    <tr>
                      <td>
                        <div className="legend" />
                      </td>
                      <td>
                        <span className="text text--bold">
                          Health & Fitness
                        </span>
                      </td>
                      <td>
                        <span className="text">$329.00</span>
                      </td>
                      <td>
                        <span className="text">53%</span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="legend" />
                      </td>
                      <td>
                        <span className="text text--bold">Fashion</span>
                      </td>
                      <td>
                        <span className="text">$329.00</span>
                      </td>
                      <td>
                        <span className="text">53%</span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="legend" />
                      </td>
                      <td>
                        <span className="text text--bold">Food & Cooking</span>
                      </td>
                      <td>
                        <span className="text">$329.00</span>
                      </td>
                      <td>
                        <span className="text">53%</span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <div className="section-2-box">
                <Doughnut />
              </div>
            </section>

            <section className="section-3-container">
              <div className="section-3-box">
                <h1 className="text-h1">Payments</h1>
              </div>

              <div className="section-3-box">
                <span className="text-subtitle">
                  Top payment methods by category (7 days)
                </span>
              </div>

              <div className="section-3-box">
                <Pie />
              </div>
            </section>
          </div>
        </main>
      </StyledAnalyticsChart>
    );
  }
}

export default AnalyticsChart;
