import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
    ProductCardContainer,
    Img,
    Footer,
    ButtonContainer,
    Name,
    Price
} from "./product-card.styles.jsx";

import { BUTTON_TYPES_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <Img src={imageUrl} alt={`${name}`} />

            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>

            <ButtonContainer onClick={addProductToCart} buttonType={BUTTON_TYPES_CLASSES.inverted}>
                Add to cart
            </ButtonContainer>
        </ProductCardContainer>
    );
}

export default ProductCard;