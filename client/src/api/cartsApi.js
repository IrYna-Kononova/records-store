import axios from "axios";

export const getCartData = async (cartsDispatch, cartId) => {
  try {
    const response = await axios.get(`/carts/${cartId}`);

    cartsDispatch({ type: "GET_CART_DATA", payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};

export const addCartItem = async (
  cartsDispatch,
  cartsState,
  record,
  cartId,
  newQuantity // Add this parameter to handle the updated quantity
) => {
  try {
    //! Check for item existence in the state
    const itemToUpdate = cartsState.items?.find(
      (item) => item.record._id === record._id
    );

    /* 
   ! If item exists: 
      * Create patch request to update the quantity of the item in DB with the provided new quantity
      * Update the state with the new changes 
      * return to exit the function
   */
    if (itemToUpdate) {
      const response = await axios.patch(`/carts/${cartId}`, {
        quantity: newQuantity,
        record: record._id,
      });

      cartsDispatch({ type: "UPDATE_CART_ITEM", payload: response.data.data });
      return;
    }

    //! Otherwise submit the new item to the DB
    const response = await axios.post(`/carts/${cartId}`, {
      record: record._id,
      quantity: newQuantity, // Use the new quantity
    });

    cartsDispatch({ type: "ADD_CART_DATA", payload: response.data.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCartItem = async (cartsDispatch, recordId, cartId) => {
  try {
    await axios.put(`/carts/${cartId}`, {
      record: recordId,
    });

    cartsDispatch({ type: "DELETE_FROM_CART", payload: recordId });
  } catch (error) {
    console.log(error);
  }
};
