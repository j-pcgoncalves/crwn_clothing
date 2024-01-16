import styled from "styled-components";

import Button from "../button/button.component";

export const CartDropdownContainer = styled.div`
    position: absolute; 
    width: 280px; 
    height: 340px; 
    display: flex; 
    flex-direction: column; 
    padding: 20px; 
    border: 1px solid black; 
    background-color: white; 
    top: 90px; 
    right: 40px; 
    z-index: 5; 
`;

export const EmptyMessage = styled.p`
    font-size: 18px; 
    margin: 50px auto; 
`;

export const CartItems = styled.div`
    height: 240px; 
    display: flex; 
    flex-direction: column; 
    overflow: auto;
`;

export const CheckoutButton = styled(Button)`
    margin-top: auto;
    font-size: 14px;
`;