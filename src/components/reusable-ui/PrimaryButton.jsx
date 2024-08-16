import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ Label, Icon, OnClick }) {
  return (
    <PrimaryButtonStyled onClick={OnClick && OnClick}>
      <span>{Label}</span>
      <div className="icon">{Icon && Icon}</div>
    </PrimaryButtonStyled>
  );
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
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.sizes.SM};
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    cursor: pointer;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 10px; */
  }
`;
