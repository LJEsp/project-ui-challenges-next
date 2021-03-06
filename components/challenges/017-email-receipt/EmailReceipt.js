import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Spring, animated, config } from "react-spring";
import destyle from "../../../utils/destyle";

const theme = {
  color: {
    primary: "#2979FF",
    light: "#FFFFFF",
    dark: "#212121",
    grey: "#F5F5F5",
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

  html {
    width: 100%;
    height: 100%;
    font-size: 16px;

    ${
      "" /* @media (max-width: ${theme.breakpoint.first}) {
      font-size: 15px;
    } */
    }
  }

  body {
    font-family: "Montserrat", sans-serif;
    color: ${theme.color.dark};
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${theme.breakpoint.first}) {
      align-items: flex-start;
      padding: ${theme.size.m}
    }
  }
`;

const StyledEmailReceipt = styled.div`
  /* border: 1px solid cyan; */
  margin-bottom: ${theme.em(110)};
  max-width: ${theme.em(464)};
  position: relative;
  font-size: 1rem;

  @media (max-width: ${theme.breakpoint.first}) {
    font-size: 0.9375em;
  }

  .container {
    /* border: 1px solid magenta; */
    /* width: ${theme.em(448)}; */
    transform: skewY(12deg);
    transform-origin: top left;
    padding-top: ${theme.size.xl};
    padding-right: ${theme.em(24)};
    padding-left: ${theme.em(40)};
    background: linear-gradient(
      180deg,
      #f5f5f5 0%,
      rgba(245, 245, 245, 0.9) 100%
    );
    box-shadow: 0.3em 0.6em 3em rgba(0, 0, 0, 0.2);

    @media (max-width: ${theme.breakpoint.first}) {
      padding-left: ${theme.em(24)};
      padding-top: ${theme.em(72)};
      padding-bottom: ${theme.size.m};
    }

    > * {
      transform: skewY(-12deg);
      transform-origin: top left;
    }
  }

  .header {
    display: flex;
    margin-bottom: ${theme.size.m};

    @media (max-width: ${theme.breakpoint.first}) {
      flex-flow: column;
      margin-bottom: ${theme.size.s};

    }

    &__logo {
      margin-right: ${theme.size.l};

      @media (max-width: ${theme.breakpoint.first}) {
        align-self: center;
        margin-right: 0;
      }
    }

    &__detail-box {
      /* border: 1px solid orange; */
      align-self: flex-end;

      @media (max-width: ${theme.breakpoint.first}) {
        align-self: center;
        display: flex;
        flex-flow: column;
        align-items: center;
      }
    }
  }

  .heading {
    /* border: 1px solid magenta; */
    /* height: ${theme.size.l}; */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-top: ${theme.size.m};
    margin-bottom: ${theme.size.l};

    @media (max-width: ${theme.breakpoint.first}) {
      margin-bottom: ${theme.size.m};
    }   

    &__text {
      font-weight: 700;
      text-align: center;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
  }

  .text-box {
    /* border: 1px solid magenta; */
    /* height: ${theme.size.l}; */
    padding-top: ${theme.size.m};
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;

    &--center {
      justify-content: center;
    }

    &--right {
      justify-content: flex-end;
      text-align: center;

      @media (max-width: ${theme.breakpoint.first}) {
        justify-content: center;
      }   
    }
  }

  .text {
    &--uppercase {
      text-transform: uppercase;
    }

    &--data {
      letter-spacing: 0.08em;
    }

    &--bold {
      font-weight: 700;
    }
  }

  .logo {
    /* border: 1px solid magenta; */
    fill: ${theme.color.primary};
    width: ${theme.em(96)};
    height: ${theme.em(96)};

    &__svg {
      fill: inherit;
    }
  }

  .product-box {
    display: grid;
    grid-template-columns: auto 4fr 1fr 1fr;
    grid-column-gap: ${theme.size.m};
    justify-items: start;
    margin-bottom: ${theme.size.m};

    @media (max-width: ${theme.breakpoint.first}) {
      grid-template-columns: 4fr 1fr 1fr;
      grid-column-gap: ${theme.size.s};
      grid-row-gap: ${theme.size.m};
      margin-bottom: ${theme.size.l};
    }
  }

  .product {
    width: ${theme.size.xl};
    height: ${theme.size.xl};
    border: ${theme.em(1)} solid ${theme.color.white};
    border-radius: 1000em;
    overflow: hidden;

    @media (max-width: ${theme.breakpoint.first}) {
      grid-column: 1 / -1;
      justify-self: center;
      
    }

    &__image {
      /* border: 1px solid magenta; */
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .total-box {
    display: flex;
    justify-content: flex-end;
    margin-bottom: ${theme.size.m};

    @media (max-width: ${theme.breakpoint.first}) {
       justify-content: center;
    }

    div:first-child {
      margin-right: ${theme.size.m};
    }
  }

  .divider {
    width: 100%;
    height: ${theme.em(1)};
    background-color: ${theme.color.dark};

  }

  .button-box {
    display: flex;
    justify-content: flex-end;

    @media (max-width: ${theme.breakpoint.first}) {
       justify-content: center;
    }
  }

  .button {
    margin-top: ${theme.size.m};
    background-color: ${theme.color.primary};
    box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
    border-radius: 1000em;
    color: ${theme.color.white};
    padding: ${theme.size.s} ${theme.size.m};
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.04em;
    transition-duration: 0.15s;

    &:hover {
      background-color: ${theme.color.dark};
    }

    &:active {
    }
  }

  .design-outline {
    position: absolute;
    top: ${theme.size.m};
    right: calc(${theme.size.m} * -1);
    bottom: calc(${theme.size.m} * -1);
    left: ${theme.size.m};
    border: ${theme.em(2)} solid ${theme.color.white};
    transform: skewY(12deg);
    transform-origin: top left;
    pointer-events: none;

    @media (max-width: ${theme.breakpoint.first}) {
      top: ${theme.size.m};
      left: ${theme.size.s};
      right: ${theme.size.s};
    }
  }

  .design-back-plate {
    /* border: 1px solid green; */
    position: absolute;
    top: ${theme.size.l};
    bottom: calc(${theme.size.xl} * -1);
    left: calc(50% - 100% / 1.618 / 2);
    width: calc(100% / 1.618);
    background-color: ${theme.color.dark};
    border-radius: ${theme.size.s};
    transform: scaleX(-1) skewY(12deg);
    z-index: -1;
  }

  .design-circle-outline {
    width: ${theme.size.l};
    height: ${theme.size.l};
    border: ${theme.size.xs} solid ${theme.color.primary};
    border-radius: 1000em;
    position: absolute;
    top: ${theme.em(28)};
    right: ${theme.em(40)};

    @media (max-width: ${theme.breakpoint.first}) {
      top: 4%;
      right: 8%;
    }
  }

  .design-circle-fill {
    background-color: ${theme.color.primary};
    width: ${theme.size.m};
    height: ${theme.size.m};
    position: absolute;
    /* left: ${theme.em(216)}; */
    left: calc(50% - ${theme.size.m} / 2);
    bottom: ${theme.size.m};
    border-radius: 1000em;
    margin-bottom: calc(${theme.em(110)} * -1);
  }
`;

const EmailReceipt = () => {
  return (
    <StyledEmailReceipt>
      <PageStyle />

      {/* >>> Content */}

      <Spring
        native
        config={config.gentle}
        from={{
          opacity: 0,
          transform: "skewY(0deg) translateY(4rem) translateX(-4rem)"
        }}
        to={{
          opacity: 1,
          transform: "skewY(12deg) translateY(0rem) translateX(0)"
        }}
      >
        {props => (
          <animated.div style={props} className="container">
            <header className="header">
              <div className="header__logo">
                <svg
                  className="logo"
                  // width="94"
                  // height="96"
                  viewBox="0 0 94 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.7636 68.9623C11.539 68.0704 10.3691 67.1081 9.25978 66.0812C10.6925 66.3403 12.1528 66.5201 13.636 66.6158C14.4674 66.6695 15.3061 66.6968 16.1511 66.6968C37.3943 66.6968 54.6153 49.4757 54.6153 28.2326C54.6153 18.6632 51.1208 9.90996 45.3382 3.17946C44.3782 2.06204 43.3551 1.00039 42.2745 0C43.7784 0.272034 45.2519 0.631506 46.6895 1.07296C62.415 5.90184 73.8474 20.5401 73.8474 37.8486C73.8474 59.0918 56.6264 76.3128 35.3832 76.3128C26.929 76.3128 19.1118 73.5853 12.7636 68.9623ZM49.5523 4.67797C54.2547 11.3348 57.0193 19.4618 57.0193 28.2326C57.0193 50.4023 39.3665 68.4491 17.3503 69.0835C22.6547 72.153 28.8126 73.9088 35.3832 73.9088C55.2987 73.9088 71.4434 57.7641 71.4434 37.8486C71.4434 22.9645 62.424 10.1834 49.5523 4.67797Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M85.8674 40.2526C88.5228 40.2526 90.6755 38.1 90.6755 35.4446C90.6755 32.7892 88.5228 30.6366 85.8674 30.6366C83.212 30.6366 81.0594 32.7892 81.0594 35.4446C81.0594 38.1 83.212 40.2526 85.8674 40.2526ZM85.8674 42.6566C89.8505 42.6566 93.0795 39.4277 93.0795 35.4446C93.0795 31.4615 89.8505 28.2326 85.8674 28.2326C81.8843 28.2326 78.6554 31.4615 78.6554 35.4446C78.6554 39.4277 81.8843 42.6566 85.8674 42.6566Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M81.0594 54.6767C82.3871 54.6767 83.4634 53.6004 83.4634 52.2727C83.4634 50.945 82.3871 49.8687 81.0594 49.8687C79.7317 49.8687 78.6554 50.945 78.6554 52.2727C78.6554 53.6004 79.7317 54.6767 81.0594 54.6767ZM81.0594 57.0807C83.7148 57.0807 85.8674 54.9281 85.8674 52.2727C85.8674 49.6173 83.7148 47.4647 81.0594 47.4647C78.404 47.4647 76.2514 49.6173 76.2514 52.2727C76.2514 54.9281 78.404 57.0807 81.0594 57.0807Z"
                  />
                  <path d="M76.2514 61.8887C76.2514 63.2164 75.1751 64.2927 73.8474 64.2927C72.5197 64.2927 71.4434 63.2164 71.4434 61.8887C71.4434 60.561 72.5197 59.4847 73.8474 59.4847C75.1751 59.4847 76.2514 60.561 76.2514 61.8887Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M93.3741 19.1403L16.4457 62.4126L15.2671 60.3173L92.1955 17.045L93.3741 19.1403Z"
                  />
                  <path d="M70.8739 22.9936L78.6554 18.6165L77.4768 16.5212L69.8718 20.799C70.2279 21.5181 70.5623 22.2499 70.8739 22.9936Z" />
                  <path d="M54.5982 29.3905L0.548386 59.7935L1.72698 61.8887L54.4074 32.256C54.5056 31.3106 54.5697 30.355 54.5982 29.3905Z" />
                  <path d="M11.0247 87.1471C12.0066 87.1471 12.7708 87.4361 13.3172 88.0142C13.8636 88.5843 14.1368 89.4118 14.1368 90.4967V95.6042H12.2125V90.556C12.2125 89.9701 12.0581 89.5306 11.7493 89.2376C11.4484 88.9367 11.0485 88.7862 10.5496 88.7862C10.0032 88.7862 9.5677 88.9446 9.24304 89.2614C8.91838 89.5702 8.75605 90.0413 8.75605 90.6748V95.6042H6.83182V90.556C6.83182 89.9701 6.68928 89.5306 6.40421 89.2376C6.11914 88.9367 5.73113 88.7862 5.24017 88.7862C4.70171 88.7862 4.27014 88.9446 3.94548 89.2614C3.62082 89.5702 3.45848 90.0413 3.45848 90.6748V95.6042H1.53426V87.2896H3.39909V88.3111C3.65249 87.9389 3.98903 87.6539 4.40872 87.4559C4.82841 87.25 5.31144 87.1471 5.85783 87.1471C6.42797 87.1471 6.92684 87.254 7.35445 87.4678C7.78205 87.6737 8.11068 87.9746 8.34032 88.3705C8.62539 87.9746 8.99756 87.6737 9.45684 87.4678C9.92404 87.254 10.4467 87.1471 11.0247 87.1471Z" />
                  <path d="M21.0105 95.7467C20.1474 95.7467 19.3674 95.5606 18.6706 95.1884C17.9817 94.8163 17.4392 94.3055 17.0433 93.6562C16.6553 92.9989 16.4613 92.2625 16.4613 91.4469C16.4613 90.6313 16.6553 89.8988 17.0433 89.2495C17.4392 88.5922 17.9817 88.0775 18.6706 87.7053C19.3674 87.3332 20.1474 87.1471 21.0105 87.1471C21.8737 87.1471 22.6497 87.3332 23.3386 87.7053C24.0275 88.0775 24.57 88.5922 24.9659 89.2495C25.3618 89.8988 25.5598 90.6313 25.5598 91.4469C25.5598 92.2625 25.3618 92.9989 24.9659 93.6562C24.57 94.3055 24.0275 94.8163 23.3386 95.1884C22.6497 95.5606 21.8737 95.7467 21.0105 95.7467ZM21.0105 94.1076C21.5015 94.1076 21.9449 93.9967 22.3409 93.775C22.7368 93.5453 23.0456 93.2286 23.2674 92.8247C23.497 92.4209 23.6118 91.9616 23.6118 91.4469C23.6118 90.9322 23.497 90.4729 23.2674 90.0691C23.0456 89.6652 22.7368 89.3524 22.3409 89.1307C21.9449 88.9011 21.5015 88.7862 21.0105 88.7862C20.5196 88.7862 20.0762 88.9011 19.6802 89.1307C19.2843 89.3524 18.9715 89.6652 18.7419 90.0691C18.5201 90.4729 18.4093 90.9322 18.4093 91.4469C18.4093 91.9616 18.5201 92.4209 18.7419 92.8247C18.9715 93.2286 19.2843 93.5453 19.6802 93.775C20.0762 93.9967 20.5196 94.1076 21.0105 94.1076Z" />
                  <path d="M31.9828 95.7467C31.1197 95.7467 30.3397 95.5606 29.6428 95.1884C28.9539 94.8163 28.4115 94.3055 28.0156 93.6562C27.6275 92.9989 27.4335 92.2625 27.4335 91.4469C27.4335 90.6313 27.6275 89.8988 28.0156 89.2495C28.4115 88.5922 28.9539 88.0775 29.6428 87.7053C30.3397 87.3332 31.1197 87.1471 31.9828 87.1471C32.8459 87.1471 33.6219 87.3332 34.3109 87.7053C34.9998 88.0775 35.5422 88.5922 35.9381 89.2495C36.3341 89.8988 36.532 90.6313 36.532 91.4469C36.532 92.2625 36.3341 92.9989 35.9381 93.6562C35.5422 94.3055 34.9998 94.8163 34.3109 95.1884C33.6219 95.5606 32.8459 95.7467 31.9828 95.7467ZM31.9828 94.1076C32.4737 94.1076 32.9172 93.9967 33.3131 93.775C33.7091 93.5453 34.0179 93.2286 34.2396 92.8247C34.4692 92.4209 34.5841 91.9616 34.5841 91.4469C34.5841 90.9322 34.4692 90.4729 34.2396 90.0691C34.0179 89.6652 33.7091 89.3524 33.3131 89.1307C32.9172 88.9011 32.4737 88.7862 31.9828 88.7862C31.4918 88.7862 31.0484 88.9011 30.6525 89.1307C30.2565 89.3524 29.9437 89.6652 29.7141 90.0691C29.4924 90.4729 29.3815 90.9322 29.3815 91.4469C29.3815 91.9616 29.4924 92.4209 29.7141 92.8247C29.9437 93.2286 30.2565 93.5453 30.6525 93.775C31.0484 93.9967 31.4918 94.1076 31.9828 94.1076Z" />
                  <path d="M43.3351 87.1471C44.325 87.1471 45.097 87.4599 45.6513 88.0854C46.2056 88.7031 46.4828 89.586 46.4828 90.7342V95.6042H44.5586V90.7936C44.5586 90.1284 44.4002 89.6296 44.0834 89.297C43.7746 88.9565 43.3431 88.7862 42.7887 88.7862C42.2028 88.7862 41.7316 88.9684 41.3753 89.3326C41.0269 89.689 40.8526 90.2195 40.8526 90.9243V95.6042H38.9284V87.2896H40.7933V88.2992C41.0783 87.9191 41.4347 87.6341 41.8623 87.444C42.2899 87.2461 42.7808 87.1471 43.3351 87.1471Z" />
                  <path d="M54.9506 91.3162H56.7085V95.6042H55.2594V95.1053C54.6813 95.5329 53.937 95.7467 53.0263 95.7467C52.2582 95.7467 51.5535 95.5804 50.912 95.2478C50.2706 94.9153 49.7599 94.4322 49.3798 93.7987C48.9997 93.1573 48.8097 92.3971 48.8097 91.5182C48.8097 90.6709 49.0037 89.9186 49.3917 89.2614C49.7876 88.5962 50.334 88.0775 51.0308 87.7053C51.7277 87.3332 52.5116 87.1471 53.3827 87.1471C54.1112 87.1471 54.7724 87.2698 55.3663 87.5153C55.9602 87.7608 56.459 88.1171 56.8629 88.5843L55.6276 89.7246C55.0337 89.099 54.3171 88.7862 53.4777 88.7862C52.9471 88.7862 52.476 88.9011 52.0642 89.1307C51.6524 89.3524 51.3317 89.6692 51.1021 90.0809C50.8725 90.4927 50.7576 90.9678 50.7576 91.5063C50.7576 92.0685 50.8685 92.5476 51.0902 92.9435C51.3199 93.3394 51.6247 93.6404 52.0048 93.8462C52.3849 94.0442 52.8006 94.1432 53.252 94.1432C53.9251 94.1432 54.4913 93.9531 54.9506 93.573V91.3162Z" />
                  <path d="M59.4462 87.2896H61.3704V94.0363H65.5395V95.6042H59.4462V87.2896Z" />
                  <path d="M70.4156 88.8337V94.06H71.8529V95.6042H67.0423V94.06H68.4914V88.8337H67.0423V87.2896H71.8529V88.8337H70.4156Z" />
                  <path d="M74.2569 87.2896H78.0341C78.9368 87.2896 79.7327 87.4638 80.4216 87.8122C81.1184 88.1527 81.6569 88.6358 82.037 89.2614C82.425 89.8869 82.619 90.6154 82.619 91.4469C82.619 92.2783 82.425 93.0069 82.037 93.6324C81.6569 94.258 81.1184 94.745 80.4216 95.0934C79.7327 95.4339 78.9368 95.6042 78.0341 95.6042H74.2569V87.2896ZM77.9391 94.0244C78.7705 94.0244 79.4317 93.7948 79.9227 93.3355C80.4216 92.8683 80.671 92.2388 80.671 91.4469C80.671 90.655 80.4216 90.0295 79.9227 89.5702C79.4317 89.103 78.7705 88.8694 77.9391 88.8694H76.1811V94.0244H77.9391Z" />
                  <path d="M91.8146 94.8915C91.4186 95.1607 90.9198 95.3706 90.3179 95.521C89.724 95.6715 89.0906 95.7467 88.4175 95.7467C87.5781 95.7467 86.8654 95.6438 86.2794 95.4379C85.6935 95.2241 85.25 94.9311 84.9491 94.5589C84.6482 94.1788 84.4977 93.7473 84.4977 93.2642C84.4977 92.8208 84.6205 92.4288 84.866 92.0883C85.1114 91.7478 85.448 91.4944 85.8756 91.3281C85.5509 91.1539 85.2975 90.9163 85.1154 90.6154C84.9412 90.3145 84.8541 89.978 84.8541 89.6058C84.8541 89.1545 84.9927 88.7427 85.2698 88.3705C85.547 87.9983 85.9667 87.7014 86.5289 87.4797C87.0911 87.2579 87.78 87.1471 88.5956 87.1471C89.1341 87.1471 89.6607 87.2025 90.1754 87.3134C90.6901 87.4163 91.1375 87.5588 91.5176 87.741L90.9831 89.2138C90.2546 88.8733 89.4825 88.7031 88.6669 88.7031C88.0492 88.7031 87.582 88.7981 87.2653 88.9882C86.9565 89.1703 86.8021 89.4197 86.8021 89.7365C86.8021 90.0295 86.905 90.2551 87.1109 90.4135C87.3247 90.564 87.6454 90.6392 88.073 90.6392H90.3417V92.1596H87.9542C87.4712 92.1596 87.099 92.2427 86.8377 92.409C86.5764 92.5753 86.4457 92.8168 86.4457 93.1336C86.4457 93.4661 86.612 93.7275 86.9446 93.9175C87.2851 94.0996 87.8038 94.1907 88.5006 94.1907C88.9916 94.1907 89.4825 94.1273 89.9735 94.0006C90.4644 93.866 90.8802 93.6799 91.2207 93.4424L91.8146 94.8915Z" />
                </svg>
              </div>

              <div className="header__detail-box">
                <div className="text-box">
                  <span className="text text--uppercase">Date:&nbsp;</span>
                  <span className="text text--data">01/25/19</span>
                </div>

                <div className="text-box text-box--center">
                  <span className="text text--uppercase">
                    Order Number:&nbsp;
                  </span>
                  <span className="text text--data">0987654321</span>
                </div>
              </div>
            </header>

            <div className="heading">
              <span className="heading__text">Thank you for your purchase</span>
            </div>

            <div className="product-box">
              <div className="product">
                <img
                  className="product__image"
                  src="/static/017-email-receipt/product-01.jpg"
                  alt=""
                />
              </div>

              <div>
                <span className="text">Bright Red Purse With Gold — $699</span>
              </div>

              <div>
                <span className="text">x 01</span>
              </div>

              <div>
                <span className="text">$699</span>
              </div>
            </div>

            <div className="product-box">
              <div className="product">
                <img
                  className="product__image"
                  src="/static/017-email-receipt/product-02.jpg"
                  alt=""
                />
              </div>

              <div>
                <span className="text">Boho Earrings — $449</span>
              </div>

              <div>
                <span className="text">x 03</span>
              </div>

              <div>
                <span className="text">$1347</span>
              </div>
            </div>

            <div className="product-box">
              <div className="product">
                <img
                  className="product__image"
                  src="/static/017-email-receipt/product-03.jpg"
                  alt=""
                />
              </div>

              <div>
                <span className="text">Galaxy Earrings — $549</span>
              </div>

              <div>
                <span className="text">x 02</span>
              </div>

              <div>
                <span className="text">$1098</span>
              </div>
            </div>

            <div className="total-box">
              <div>
                <span className="text">Total</span>
              </div>

              <div>
                <span className="text">$3144</span>
              </div>
            </div>

            <div className="divider" />

            <div className="text-box text-box--right">
              <span className="text">
                Your estimated delivery date is{" "}
                <span className="text text--bold">01/26/19</span>{" "}
              </span>
            </div>

            <div className="button-box">
              <button className="button">Track your order</button>
            </div>
          </animated.div>
        )}
      </Spring>

      <Spring
        native
        config={config.gentle}
        delay={200}
        from={{
          opacity: 0,
          transform: "skewY(0deg) translateY(8rem) translateX(8rem)"
        }}
        to={{
          opacity: 1,
          transform: "skewY(12deg) translateY(0rem) translateX(0)"
        }}
      >
        {props => <animated.div style={props} className="design-outline" />}
      </Spring>

      <Spring
        native
        config={config.gentle}
        delay={400}
        from={{
          opacity: 0,
          transform: "skewY(0deg) translateY(-4rem) translateX(4rem)"
        }}
        to={{
          opacity: 1,
          transform: "skewY(-12deg) translateY(0rem) translateX(0)"
        }}
      >
        {props => <animated.div style={props} className="design-back-plate" />}
      </Spring>

      <Spring
        native
        config={config.wobbly}
        delay={600}
        from={{
          transform: "scale(0)"
        }}
        to={{
          transform: "scale(1)"
        }}
      >
        {props => (
          <animated.div style={props} className="design-circle-outline" />
        )}
      </Spring>

      <Spring
        native
        config={config.wobbly}
        delay={800}
        from={{
          transform: `scale(0)`
        }}
        to={{
          transform: `scale(1)`
        }}
      >
        {props => <animated.div style={props} className="design-circle-fill" />}
      </Spring>
    </StyledEmailReceipt>
  );
};

export default EmailReceipt;
