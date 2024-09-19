import { css, keyframes } from "styled-components";
import { theme } from ".";

export const fadeInFromRight = keyframes`
0%{
  position: absolute;
  z-index: -1;
  opacity: 0;
  transform: translate(100%)
}

100%{
  opacity: 1;
  transform: translateX(0);
}
`;

export const adminAnimation = css`
  .admin-appear {
    opacity: 0.1;
    transform: translateY(100%);
    &.admin-appear-active {
      opacity: 1;
      transform: translateY(0%);
      transition: all 500ms;
    }
  }
`;

export const basketAnimation = css`
  .animation-basket-appear,
  .animation-basket-enter {
    transform: translateX(100px);
    opacity: 0%;
  }

  .animation-basket-appear-active,
  .animation-basket-enter-active {
    transition: ${theme.animations.speed.quick};
    transform: translateX(0);
    opacity: 100%;
  }

  .animation-basket-exit {
    transform: translateX(0);
    opacity: 100%;
  }

  .animation-basket-exit-active {
    transition: ${theme.animations.speed.quick};
    transform: translateX(-100px);
    opacity: 0%;
  }
`;
