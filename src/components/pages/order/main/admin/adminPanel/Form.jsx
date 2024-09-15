import React from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputTextConfig } from "./getInputTextConfig";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, children, onFocus, onBlur }, ref) => {
    //state

    //comportements

    const inputTexts = getInputTextConfig(product);

    //affichage
    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
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
        </div>
        <div className="form-footer">{children}</div>
      </FormStyled>
    );
  }
);

export default Form;

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1/2/4/3;
    display: grid;
    grid-row-gap: 8px;
  }
  .form-footer {
    grid-area: 4/2/5/-1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
