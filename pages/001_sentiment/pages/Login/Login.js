import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {  Transition } from "react-spring";

import { Logo, TextField, Button } from "../../components";

import SignUpForm from "./components/SignUpForm/SignUpForm";

import bgDog from "../../images/bg-dog.png";

const StyledLogin = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding-top: calc(${props => props.theme.spacing.unit} * 5);
  align-items: center;
  background-image: url(${bgDog});
  background-size: cover;
  background-position: center;

  > .login__logo {
    margin-bottom: calc(${props => props.theme.spacing.unit} * 8);
  }

  > .login__text-fields {
    width: 20rem;
    margin-bottom: calc(${props => props.theme.spacing.unit} * 3);

    ${props => props.theme.media.xsm`
      width: 18rem;
    `}

    > :first-child {
      margin-bottom: ${props => props.theme.spacing.unit};
    }

    > * {
      display: block;
      width: 100%;
    }
  }

  > .login__buttons {
    display: flex;
    flex-flow: column;
    align-items: center;

    > * {
      margin-bottom: ${props => props.theme.spacing.unit};
    }
  }
`;

export default class Login extends Component {
  state = {
    isSignUpFormOpen: false
  };

  toggleSignUpForm = () => {
    this.setState({ isSignUpFormOpen: !this.state.isSignUpFormOpen });
  };

  render() {
    const { isSignUpFormOpen } = this.state;

    return (
      <StyledLogin>
        <div className="login__logo">
          <Logo dark />
        </div>

        <div className="login__text-fields">
          <TextField dark placeholder="Username" />

          <TextField dark placeholder="Password" />
        </div>

        <div className="login__buttons">
          <Link to="/001/main">
            <Button dark>Log In</Button>
          </Link>

          <Button
            type="password"
            dark
            variant="secondary"
            onClick={this.toggleSignUpForm}
          >
            Sign Up
          </Button>
        </div>

        <Transition
          items={isSignUpFormOpen}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {isSignUpFormOpen =>
            isSignUpFormOpen &&
            (props => (
              <SignUpForm
                style={props}
                toggleSignUpForm={this.toggleSignUpForm}
              />
            ))
          }
        </Transition>
      </StyledLogin>
    );
  }
}
