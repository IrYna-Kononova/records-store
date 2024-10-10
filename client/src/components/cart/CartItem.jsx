import React, { useContext } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import "../../styles/CartItem.scss";

import { addCartItem, deleteCartItem, getCartData } from "../../api/cartsApi";
import { DataContext } from "../../contexts/Context";

const CartItem = ({ item }) => {
  const { cartsState, cartsDispatch, usersState } = useContext(DataContext);
  const { cartId } = usersState.user;
  const { record, quantity } = item;
  const { title, artist, img, _id } = record;

  const deleteFromCartHandler = async (recordId) => {
    await deleteCartItem(cartsDispatch, recordId, cartId);
    getCartData(cartsDispatch, cartId);
  };

  const handleQuantityChange = async (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      await addCartItem(cartsDispatch, cartsState, record, cartId, newQuantity);
      getCartData(cartsDispatch, cartId);
    }
  };

  return (
    <li className="item">
      <h3 className="item__title">
        {title} by {artist}
      </h3>
      <img src={img} alt="thumbnail" className="item__thumbnail" />
      <div className="item__actions">
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="item__quantity"
        />
        <AiTwotoneDelete
          className="item__remove"
          onClick={() => deleteFromCartHandler(_id)}
        />
      </div>
    </li>
  );
};

export default CartItem;
