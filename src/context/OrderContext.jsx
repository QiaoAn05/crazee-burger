import { createContext } from "react";

export default createContext({
    isAdminMode: false,
    setIsAdminMode: () => {},
    isCollapsed: false,
    setIsCollapsed: () => {},
    isAddSelected: true,
    setIsAddSelected: () => {},
    isEditSelected: false,
    setIsEditSelected: () => {},
})