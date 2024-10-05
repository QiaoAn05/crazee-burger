import React from "react";
import { getInputTextConfig, getSelectInputConfig } from "./getInputConfig";
import styled from "styled-components";
import TextInput from "../../../../../../reusable-ui/TextInput";
import SelectInput from "../../../../../../reusable-ui/SelectInput";

export const Inputs = React.forwardRef(
  ({ product, onChange, onFocus, onBlur }, ref) => {
    const inputTexts = getInputTextConfig(product);
    const selectInputs = getSelectInputConfig(product);

    return (
      <InputsStyled>
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            {...input}
            onChange={onChange}
            version="minimalist"
            ref={ref && input.name === "title" ? ref : null}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        ))}
        {selectInputs.map((selectInput) => (
          <SelectInput
            key={selectInput.id}
            {...selectInput}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        ))}
      </InputsStyled>
    );
  }
);

const InputsStyled = styled.div`
  grid-area: 1/2/4/3;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 8px;

  .title {
    grid-area: 1/1/2/4;
  }

  .image-source {
    grid-area: 2/1/3/4;
  }

  .price {
    grid-area: 3/1/4/2;
  }
`;
