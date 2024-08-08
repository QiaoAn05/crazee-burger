import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {
const { 
  isCollapsed, 
  setIsCollapsed, 
  currentTabSelected,
  setCurrentTabSelected,
} = useContext(OrderContext)

  const selectTab = (selectedTab) => {
    setIsCollapsed(false)
    setCurrentTabSelected(selectedTab)
  }

  const tabs = getTabsConfig(currentTabSelected)

  //affichage
  return (
    <AdminTabsStyled>
        <Tab 
        label=""
        Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/>} 
        onClick={() => setIsCollapsed(!isCollapsed)} 
        className={isCollapsed ? "is-active" : ""}
        />
        {tabs.map((tab) => (
          <Tab 
          key={tab.index}
          label= {tab.label}
          Icon={tab.Icon} 
          onClick={() => selectTab(tab.index)} 
          className={currentTabSelected === tab.index ? "is-active" : ""}
          />
        ))}
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