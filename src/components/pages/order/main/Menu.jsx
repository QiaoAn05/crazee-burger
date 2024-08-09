import styled from "styled-components";
import Product from "./Product";
import { useState } from "react";
import { theme } from "../../../../theme";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function Menu() {
  //state
  const [menu, setMenu] = useState(fakeMenu.MEDIUM)

  //behavior
  const handleDelete = (id) => {
    console.log(id);
    //copie du state
    const productCopy = [...menu];
    //manipulation de la copie du state
    const productCopyUpdated = productCopy.filter(product => product.id !== id)
    //modifier le state
    setMenu(productCopyUpdated)
  }

  //Render
  return (
    <MenuStyled>
      {menu.length === 0 ? 
        <div className="empty-menu">
          <p><b>Le menu est vide?</b></p>
          <p>Cliquez ci-dessous pour le réinitialiser</p>
          <PrimaryButton Label={"Générer de nouveaux produits"}/>
        </div>  
      : 
      <div className="product">
        {menu.map(product => (
          <Product 
          key={product.id}
          productInfo={product}
          title={product.title}
          imageSource={product.imageSource}
          price={product.price}
          onProductDelete={handleDelete}
          />
        ))}
      </div>
    }
    </MenuStyled>
  )
}

const MenuStyled = styled.section`
background-color: ${theme.colors.background_white};

  .empty-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greyBlue};
    font-family: "Amatic SC";
    font-size: 36px;
    font-weight: 400;
    line-height: 45.4px;
    text-align: center;
    height: 85vh;
    &>:last-child{
      width: 300px;
    }
  }
  .product {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px 30px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: ${theme.shadows.strong};
  }
`;