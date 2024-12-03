import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { ButtonType } from "../../typescript/ButtonType";
import { ButtonVersionType } from "../../typescript/ButtonVersionType";

export default function Button({
  Label,
  Icon,
  OnClick,
  version = "primary",
  disabled,
}: ButtonType) {
  return (
    <ButtonStyled
      onClick={OnClick && OnClick}
      version={version}
      disabled={disabled}
    >
      <span>{Label}</span>
      {Icon && <div className="icon">{Icon}</div>}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<ButtonVersionType>`
  ${({ version }) => extraStyle[version]}
`;

const extraStylePrimary = css`
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

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 100%;
  padding: 0 1.5em;
  font-weight: ${theme.colors.success};
  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
  &:active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`;

const extraStyle = {
  primary: extraStylePrimary,
  success: extraStyleSuccess,
};
