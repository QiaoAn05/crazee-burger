import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import HintMessage from "./HintMessage";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import { getInputTextConfig } from "./getInputTextConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function EditForm() {
  const { productSelected, setProductSelected } = useContext(OrderContext);
  const { productBeingEdited, setProductBeingEdited } = useState(EMPTY_PRODUCT);

  const inputTexts = getInputTextConfig(productSelected);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductBeingEdited({ ...productBeingEdited, [name]: value });
  };

  return (
    // <HintMessage />
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            {...input}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      {/* <div className="submit">{isSubmitted && <SubmitMessage />}</div> */}
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
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
