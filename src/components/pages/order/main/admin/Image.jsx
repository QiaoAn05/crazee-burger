import styled from "styled-components";

export default function Image() {
  return (
    <ImageStyled>
        <img src="" alt="image du produit à ajouter" />
    </ImageStyled>
  )
}

const ImageStyled = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #E4E5E9;
  background-color: red;
`;
