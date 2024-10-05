import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./adminPanel/addForm/AddForm";
import HintMessage from "./adminPanel/editForm/HintMessage";
import EditForm from "./adminPanel/editForm/EditForm";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
  // {
  //   index: "chevronUpDown",
  //   label: "",
  //   Icon: isCollapsed ? <FiChevronUp/> : <FiChevronDown/>,
  //   onClick: () => setIsCollapsed(!isCollapsed),
  //   className: isCollapsed ? "is-active" : "",
  // },
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
