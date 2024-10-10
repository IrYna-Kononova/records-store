import React, { createContext, useContext } from "react";
import { SlBasketLoaded } from "react-icons/sl";
import "../styles/RecordCard.scss";
import { motion } from "framer-motion";
import { DataContext } from "../contexts/Context";
import { addCartItem, getCartData } from "../api/cartsApi";

const RecordCard = ({ record, index }) => {
  const { title, img, price, artist, year } = record;

  const { cartsDispatch, usersState, cartsState } = useContext(DataContext);

  const handleAddCartItem = async () => {
    await addCartItem(
      cartsDispatch,
      cartsState,
      record,
      usersState.user.cartId
    ); 

    getCartData(cartsDispatch, usersState.user.cartId);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: index * 0.08 }}
      className="record-card"
    >
      <div className="record-img-container">
        <img className="record-img" src={img} alt={`${title} cover`} />
      </div>
      <div className="record-info">
        <h3 className="record-title">{title}</h3>
        <p className="record-artist">{artist}</p>
        <p className="record-year">{year}</p>
      </div>
      <div className="record-footer">
        <p className="record-footer-price">{price} €</p>
        <button className="record-footer-button" onClick={handleAddCartItem}>
          <SlBasketLoaded />
        </button>
      </div>
    </motion.div>
  );
};

export default RecordCard;
/* 
<div className="record-card">
  <div className="record-img-container">
    <img className="record-img" />
  </div>
  <div className="record-info">
    <h3 className="record-title">{title}</h3>
    <p className="record-artist">{artist}</p>
    <p className="record-year">{year}</p>
  </div>
  <div className="record-footer">
    <p className="record-footer-price">{price} €</p>
    <button className="record-footer-button">
      <SlBasketLoaded />
    </button>
  </div>
</div>;
 */
