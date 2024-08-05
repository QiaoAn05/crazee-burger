import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import { FaUserSecret } from "react-icons/fa";
import { useContext, useState } from "react";
import ToastAdmin from "./ToastAdmin";
import AdminContext from "../../../../context/AdminContext";

export default function NavbarRightSide({ username }) {
  // const [isAdminMode, setIsAdminMode] = useState(false);
  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  const onToggleToast = () => {
    if (!isAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    // setIsAdminMode(!isAdminMode)
    setIsAdmin(!isAdmin)
  }
  
  return (
    <NavbarRightSideStyled>
        <ToggleButton
        onToggle={onToggleToast}
        labelIfUnchecked="Activer le mode admin"
        labelIfChecked="Désactiver le mode admin"
        />
        <Profile username={username}/>
        <ToastAdmin/>
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
`;
