import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  //state
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  //affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div>Aucune Image</div>
        )}
      </div>
      <div className="input-fields">
        <input
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          onChange={handleChange}
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          onChange={handleChange}
        />
        <input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
        />
      </div>
      <div className="submit">
        <button className="submit-button">Submit Button</button>
        {isSubmitted && (
          <div className="submit-message">
            <FiCheck />
            <span>Ajouté avec succès !</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-preview {
    background-color: red;
    grid-area: 1/1/4/2;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .input-fields {
    background-color: blue;
    grid-area: 1/2/4/3;
    display: grid;
  }
  .submit {
    background-color: green;
    grid-area: 4/2/5/-1;
    display: flex;
    align-items: center;

    .submit-button {
      width: 50%;
    }

    .submit-message {
      /* display: flex;
      align-items: center; */
    }
  }
`;
