import styled, { css } from "styled-components";
import { theme } from "../../theme";
import React, { ComponentPropsWithRef } from "react";

type TextInputVersion = "normal" | "minimalist";

type TextInputProps = {
  Icon: JSX.Element;
  version?: TextInputVersion;
}&ComponentPropsWithRef<"input">

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    { value, onChange, Icon, className, version = "normal", ...extraProps },
    ref
  ) => {
    return (
      <TextInputStyled className={className} version={version}>
        <div className="icon">{Icon && Icon}</div>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          type="text"
          {...extraProps}
        />
      </TextInputStyled>
    );
  }
);

export default TextInput;

type TextInputStyledProps = {
  version: TextInputVersion;
}

const TextInputStyled = styled.div<TextInputStyledProps>`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.sizes.SM};
    margin: 0 13px 0 8px;
  }

  input {
    border: none;
    font-size: ${theme.fonts.sizes.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  /* ${(props) => {
    if (props.version === "normal") return extraStyleNormal;
    if (props.version === "minimalist") return extraStyleMinimalist;
  }} */

  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 24px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &:focus {
      outline: none;
    }

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};
    &:focus {
      outline: 0;
    }
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};
