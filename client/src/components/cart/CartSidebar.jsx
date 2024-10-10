import React, { useContext } from "react";
import CartItemList from "./CartItemList";
import "../../styles/CartSidebar.scss";
import { DataContext } from "../../contexts/Context";

const CartSidebar = ({ toggleCart }) => {
  const { cartsState } = useContext(DataContext);

  const getTotalPrice = () =>
    cartsState.items.reduce(
      (total, item) => total + item.record.price * item.quantity,
      0
    );

  return (
    <div className="cart-sidebar" style={{ height: "100vh" }}>
      <button type="button" className="close-button" onClick={toggleCart}>
        &times;
      </button>
      <p className="cart-price">Total: €{getTotalPrice()}</p>
      <div className="cart-body">
        <CartItemList />
      </div>
    </div>
  );
};

export default CartSidebar;
