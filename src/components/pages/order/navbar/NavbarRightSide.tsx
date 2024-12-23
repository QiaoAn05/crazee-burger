import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import { FaUserSecret } from "react-icons/fa";
import ToastAdmin from "./ToastAdmin";
import { useOrderContext } from "../../../../context/OrderContext";

export default function NavbarRightSide() {
  const { isAdminMode, setIsAdminMode } = useOrderContext();

  const onToggleToast = () => {
    if (!isAdminMode) {
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
      });
    }
    setIsAdminMode(!isAdminMode);
  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={isAdminMode}
        onToggle={onToggleToast}
        labelIfUnchecked="Activer le mode admin"
        labelIfChecked="Désactiver le mode admin"
      />
      <Profile />
      <ToastAdmin />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  .toaster {
    max-width: 300px;
  }
`;
