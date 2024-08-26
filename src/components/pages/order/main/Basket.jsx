import styled from "styled-components";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="header">Header</div>
      <div className="content">Content</div>
      <div className="footer">Footer</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.aside`
  background-color: red;
  display: flex;
  flex-direction: column;
  .header {
    background-color: blue;
  }
  .content {
    background-color: green;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer {
    background-color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
