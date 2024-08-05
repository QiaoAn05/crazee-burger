import styled from "styled-components";

export default function PanelAdmin() {
  return (
    <PanelAdminStyled>
        <div className="tabs">
            <div className="reduce-open-tab">r/o</div>
            <div className="add-product-tab">ajouter un produit</div>
            <div className="update-product-tab">modifier un produit</div>
        </div>
        Ajouter un produit
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
        }
        .add-product-tab {
            background-color: blue;
            padding: 10px 22px 11px 22px;
            border-radius: 5px 5px 0 0;

        }
        .update-product-tab {
            background-color: green;
            padding: 10px 22px 11px 22px;
            border-radius: 5px 5px 0 0;

        }
    }
`;