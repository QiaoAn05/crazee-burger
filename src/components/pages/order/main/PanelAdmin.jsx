import styled from "styled-components";

export default function PanelAdmin() {
  return (
    <PanelAdminStyled>
        <div className="tags">
            <div className="reduce-open-tag">r/o</div>
            <div className="add-product-tag">ajouter un produit</div>
            <div className="update-product-tag">modifier un produit</div>
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

    .tags {
        display: flex;
        background-color: pink;
        align-items: center;
        padding-left: 71px;

        .reduce-open-tag {
            background-color: yellow;
            padding: 10px 22px 11px 22px;
            border-radius: 5px 5px 0 0;
        }
        .add-product-tag {
            background-color: blue;
            padding: 10px 22px 11px 22px;
            border-radius: 5px 5px 0 0;

        }
        .update-product-tag {
            background-color: green;
            padding: 10px 22px 11px 22px;
            border-radius: 5px 5px 0 0;

        }
    }
`;