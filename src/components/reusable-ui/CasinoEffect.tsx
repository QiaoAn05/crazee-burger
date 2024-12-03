import React, { useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { CasinoEffectType } from "../../typescript/CasinoEffectType";

export default function CasinoEffect({ count, className }: CasinoEffectType) {
  const nodeRef = useRef(null);
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition
        nodeRef={nodeRef}
        classNames="count-animated"
        timeout={300}
        key={count}
      >
        <span ref={nodeRef} className={className}>
          {count}
        </span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow-y: hidden;

  span {
    display: inline-block;
  }
  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 300ms;
  }

  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: 300ms;
  }
`;
