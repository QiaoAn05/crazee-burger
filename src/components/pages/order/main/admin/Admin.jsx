import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminPanel from "./adminPanel/AdminPanel";
import { fadeInFromBottom } from "../../../../../theme/animations";
import { theme } from "../../../../../theme";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);

  return (
    <AdminStyled className="admin">
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  animation: ${fadeInFromBottom} ${theme.animations.speed.slow} ease-out;
`;
