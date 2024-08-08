import styled from "styled-components";
import TabButton from "../../../reusable-ui/TabButton";

export default function PanelAdmin() {
    //state
    //behavior
    const handleClick = () => {
        alert("tab clicked");
    }
    //render
  return (
    <PanelAdminStyled>
        <div className="tabs">
            <button className="reduce-open-tab">r/o</button>
            <TabButton Label="Ajouter un produit" 
            onClick={handleClick}/>
            <TabButton Label="Modifier un produit" onClick={handleClick}/>
        </div>
        <div></div>
    </PanelAdminStyled>
  )
}

const PanelAdminStyled = styled.div`
    background-color: red;
    /* width: 100%; */
    position: sticky;
    bottom: 0;
    height: 250px;

    .tabs {
        display: flex;
        background-color: pink;
        align-items: center;
        padding-left: 71px;

        .reduce-open-tab {
            background-color: yellow;
            padding: 10px 22px 11px 22px;
            border-radius: 5px 5px 0 0;
            cursor: pointer;
        }
        /* .add-product-tab {
            background-color: blue;
            padding: 10px 22px 11px 22px;
            border-radius: 5px 5px 0 0;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
                text-underline-offset: 5px;

            }
        } */
        .update-product-tab {
            background-color: green;
            padding: 10px 22px 11px 22px;
            border-radius: 5px 5px 0 0;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
                text-underline-offset: 5px;

            }
        }

        .active {
            background-color: black;
            color: white;
        }
    }
`;