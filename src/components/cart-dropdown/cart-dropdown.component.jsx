import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import { 
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
    CheckoutButton 
} from "./cart-dropdown.styles";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length 
                        ? 
                            cartItems.map(item => 
                                <CartItem key={item.id} cartItem={item} />
                            )
                        :
                           <EmptyMessage>Your cart is empty</EmptyMessage> 
                }
            </CartItems>
            <CheckoutButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CheckoutButton>
        </CartDropdownContainer>
    );
}

export default CartDropdown;