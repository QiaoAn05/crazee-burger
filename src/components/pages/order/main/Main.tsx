import styled from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./basket/Basket";
import Menu from "./menu/Menu";
import Admin from "./admin/Admin";
import { useRef } from "react";
import { useOrderContext } from "../../../../context/OrderContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { adminAnimation } from "../../../../theme/animations";

export default function Main() {
  const { isAdminMode } = useOrderContext();
  const nodeRef = useRef(null);

  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isAdminMode && (
          <TransitionGroup className="transition-group">
            <CSSTransition
              nodeRef={nodeRef}
              appear
              classNames={"admin"}
              timeout={500}
            >
              <div ref={nodeRef}>
                <Admin />
              </div>
            </CSSTransition>
          </TransitionGroup>
        )}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);
  flex: 1;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 25% 1fr;
  /* grid-template-columns: 1fr; */
  overflow: hidden;

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

    ${adminAnimation}// Créer la constante avant de l'appeler
  }
`;
