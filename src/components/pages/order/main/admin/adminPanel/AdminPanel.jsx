import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useOrderContext } from "../../../../../../context/OrderContext";
import { getTabSelected, getTabsConfig } from "../tabsConfig";
import { EMPTY_PRODUCT } from "../../../../../../constants/product";

export default function AdminPanel() {
  const { currentTabSelected, productSelected } = useOrderContext();

  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT;
  const tabs = getTabsConfig(hasAlreadyBeenClicked);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>{tabSelected && tabSelected.Content}</AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 240px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  box-sizing: border-box;
  padding: 30px 5%;
`;
