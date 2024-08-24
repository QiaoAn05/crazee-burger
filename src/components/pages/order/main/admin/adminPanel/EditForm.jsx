import OrderContext from "../../../../../../context/OrderContext";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import { getInputTextConfig } from "./getInputTextConfig";
import { useContext } from "react";
import { theme } from "../../../../../../theme";

export default function EditForm() {
  //state
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

  const inputTexts = getInputTextConfig(productSelected);

  //comportements
  const handleChange = (e) => {
    const { name, value } = e.target;
    const beingUpdateProduct = { ...productSelected, [name]: value };
    setProductSelected(beingUpdateProduct);
    handleEdit(beingUpdateProduct);
  };

  //affichage
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
            ref={input.name === "title" ? titleEditRef : null}
          />
        ))}
      </div>
      <div className="submit">
        <span className="sentence">
          Cliquer sur un produit du menu pour le modifier{" "}
          <span className="live-update">en temps réel</span>
        </span>
      </div>
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

    .sentence {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.sizes.SM};
      .live-update {
        text-decoration: underline;
      }
    }
  }
`;
