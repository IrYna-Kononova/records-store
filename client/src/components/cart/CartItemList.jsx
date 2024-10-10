import React, { useContext } from "react";
import CartItem from "./CartItem";
import "../../styles/CartItemList.scss";
import { DataContext } from "../../contexts/Context";

const CartItemList = () => {
  const { cartsState } = useContext(DataContext);
  return (
    <ul className="item-list">
      {cartsState.items.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
    </ul>
  );
};

export default CartItemList;
