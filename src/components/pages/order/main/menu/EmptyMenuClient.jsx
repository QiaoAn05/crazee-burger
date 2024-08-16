import styled from "styled-components";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <span>Pas de produit pour toi le client</span>
    </EmptyMenuClientStyled>
  );
}

const EmptyMenuClientStyled = styled.div``;
