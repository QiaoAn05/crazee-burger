import styled from "styled-components";
import { theme } from "../../theme";

export default function NumberInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <NumberInputStyled>
    {Icon && Icon}
    <input
      value={value} 
      onChange={onChange}
      type="number"
      {...extraProps}
    />
  </NumberInputStyled>
  )
}

const NumberInputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    font-size: ${theme.fonts.sizes.SM};
    margin-right: ${theme.spacing.xs};
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.sizes.SM};
    color: ${theme.colors.dark};
    width: 100%;
    
    &:focus {
      outline: none;
    }

    &::placeholder {
      background-color: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }


`;