import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  version = "normal",
  ...extraProps
}) {
  return (
    <TextInputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
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

  ${(props) => props.version === "normal" && extraStyleNormal};
  ${(props) => props.version === "minimalist" && extraStyleMinimalist};
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
