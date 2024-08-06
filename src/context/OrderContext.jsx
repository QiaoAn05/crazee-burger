import { createContext } from "react";

export default createContext({
    isAdminMode: false,
    setIsAdminMode: () => {}
})