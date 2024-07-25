import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { theme } from "../../../../theme";
import { FaUserSecret } from "react-icons/fa";
import { useState } from "react";

export default function NavbarRightSide({ username }) {
  const [isAdminMode, setIsAdminMode] = useState(false);

  const onToggle = () => {
    if (isAdminMode === true) {
      return setIsAdminMode(!isAdminMode);
    }
    toast("Mode admin activé", {
      icon: <FaUserSecret size={30} />,
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    setIsAdminMode(!isAdminMode)
  }
  
  return (
    <NavbarRightSideStyled>
        <ToastContainer
         
        className="toaster" 
        bodyClassName="body-toast" 
        
        />
        <ToggleButton
        onToggle={onToggle}
        labelIfUnchecked="Activer le mode admin"
        labelIfChecked="Désactiver le mode admin"
        />
        <Profile username={username}/>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
