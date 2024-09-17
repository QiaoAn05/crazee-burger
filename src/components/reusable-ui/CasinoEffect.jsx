import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

export default function CasinoEffect({ count, className }) {
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition classNames="count-animated" timeout={5000} key={count}>
        <span className={className}>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
  .count-animated-enter {
    background-color: green;
  }
  .count-animated-enter-active {
    background-color: blue;
    transition: 2s;
  }
  .count-animated-enter-done {
    background-color: pink;
  }
  .count-animated-exit {
    background-color: yellow;
  }
  .count-animated-exit-active {
    background-color: red;
    transition: 2s;
  }
`;
