import { createContext } from "react";

export default createContext({
    isAdminMode: false,
    setIsAdminMode: () => {},
    isCollapsed: false,
    setIsCollapsed: () => {},
    isAddSelected: false,
    setIsAddSelected: () => {},
    isEditSelected: false,
    setIsEditSelected: () => {},
    currentTabSelected: "add",
    setCurrentTabSelected: () => {} ,
})