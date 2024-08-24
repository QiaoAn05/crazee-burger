import { useState } from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextConfig } from "./getInputTextConfig";

export default function Form({ product, onSubmit, onChange, isSubmitted }) {
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
          />
        ))}
      </div>
      <div className="submit">
        <Button
          Label={"Ajouter un nouveau produit au menu"}
          className="submit-button"
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </FormStyled>
  );
}

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
  .submit {
    grid-area: 4/2/5/-1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      width: 50%;
    }
  }
`;
