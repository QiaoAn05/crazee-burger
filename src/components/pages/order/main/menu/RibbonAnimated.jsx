import React, { useRef } from "react";
import Ribbon from "../../../../reusable-ui/Ribbon";
import { css } from "styled-components";
import { CSSTransition } from "react-transition-group";

export default function RibbonAnimated() {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={true}
      timeout={500}
      appear={true}
      classNames="ribbon-animation"
    >
      <Ribbon ref={nodeRef} className="ribbon" label="nouveau" />
    </CSSTransition>
  );
}

export const ribbonAnimation = css`
  .ribbon-animation-appear {
    position: absolute;
    opacity: absolute;
    transform: scale(1.8);
    &.ribbon-animation-appear-active {
      transition: ease-out 500ms;
      opacity: 1;
      transform: scale(1);
    }
  }

  .ribbon-animation-exit {
    position: absolute;
    opacity: 1;
    transition: 1000ms;
    &.ribbon-animation-exit-active {
      opacity: 0.1;
      transform: scale(1.5);
    }
  }
`;
