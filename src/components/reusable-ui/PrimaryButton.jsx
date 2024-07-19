import styled from "styled-components";

export default function PrimaryButton({ Label, Icon }) {
  return (
    <PrimaryButtonStyled>
        <span>
          {Label}
        </span>
        { Icon && Icon }
      </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  gap: 10px;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  background-color: #ff9f1b;
  border: 1px solid #ff9f1b;

  &:hover:not(:disabled) {
    background-color: white;
    color: #ff9f1b;
    cursor: pointer;
  }
`;