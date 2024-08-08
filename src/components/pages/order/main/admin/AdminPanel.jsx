import styled from 'styled-components';
import { theme } from "../../../../../theme";
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { tabsConfig, getTabSelected } from "./tabsConfig"
import ProductForm from './ProductForm';

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext)
  
  const tabs = tabsConfig
  const tabSelected = getTabSelected(tabs, currentTabSelected)

  return (
    <AdminPanelStyled>
      {tabSelected.label === "Ajouter un produit" &&
      <ProductForm/>
      }
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
    height: 250px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
`;