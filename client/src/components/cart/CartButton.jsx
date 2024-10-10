import React, { useContext } from "react";
import { SlBasketLoaded } from "react-icons/sl";
import "../../styles/CartButton.scss";
import CartSidebar from "./CartSidebar";
import { DataContext } from "../../contexts/Context";

const CartButton = () => {
  const { cartsState, cartsDispatch } = useContext(DataContext);

  const toggleCart = () => cartsDispatch({ type: "TOGGLE_CART" });

  return (
    <div className="shopping-cart">
      <button type="button" className="btn-cart" onClick={toggleCart}>
        <SlBasketLoaded />
        <span className="items-count">{cartsState.items.length}</span>
      </button>
      {cartsState.isOpen && <CartSidebar toggleCart={toggleCart} />}
    </div>
  );
};

export default CartButton;
