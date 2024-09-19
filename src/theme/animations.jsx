import { css } from "styled-components";
import { theme } from ".";

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
