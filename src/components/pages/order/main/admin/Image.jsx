import styled from "styled-components";

export default function Image({ newProductUrl }) {
  return (
    <ImageStyled>
        <img src="/images/coming-soon.png" alt="image du produit à ajouter" />
    </ImageStyled>
  )
}

const ImageStyled = styled.div`
  border: 1px solid #E4E5E9;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;
