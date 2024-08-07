import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {
const { 
  isCollapsed, 
  setIsCollapsed, 
  isAddSelected, 
  setIsAddSelected, 
  isEditSelected, 
  setIsEditSelected
} = useContext(OrderContext)

  const selectTab = (selectedTab) => {
    setIsCollapsed(false)

    if(selectedTab === "add") {
      setIsAddSelected(true)
      setIsEditSelected(false)
    }

    if(selectedTab === "edit") {
      setIsEditSelected(true)
      setIsAddSelected(false)
    }

  }

  return (
    <AdminTabsStyled>
        <Tab 
        label=""
        Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/>} 
        onClick={() => setIsCollapsed(!isCollapsed)} 
        className={isCollapsed ? "is-active" : ""}
        />
        <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus/>} 
        onClick={() => selectTab("add")} 
        className={isAddSelected ? "is-active" : ""}
        />
        <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline/>} 
        onClick={() => selectTab("edit")} 
        className={isEditSelected ? "is-active" : ""}
        />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;
  gap: 1px;

  .is-active {
    background-color: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
`;