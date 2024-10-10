import Cart from "../models/Cart.js";

const successHandler = (res, status, data) => {
  const response = {
    results: data.length,
    success: true,
    status,
    data,
  };
  res.status(status).json(response);
};

//! Get cart document
// GET: http://localhost:8000/carts/THE_ID_OF_AN_EXISTING_CART_IN_THE_DATABASE
export const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.id).populate("items.record");
    successHandler(res, 200, cart);
  } catch (error) {
    next(error);
  }
};

/* 
! Add a record to the cart

    POST: http://localhost:8000/carts/THE_ID_OF_AN_EXISTING_CART_IN_THE_DATABASE
     req.body : {
        "record": "THE_ID_OF_AN_EXISTING_RECORD_IN_THE_DATABASE", 
        "quantity": 1 
     }
*/
export const addCartItem = async (req, res, next) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $push: { items: req.body } },
      { new: true }
    ).populate("items.record");

    successHandler(res, 200, cart);
  } catch (error) {
    next(error);
  }
};

/* 
! Update one field (quantity) in the items array in the cart document

 PATCH: http://localhost:8000/carts/THE_ID_OF_AN_EXISTING_CART_IN_THE_DATABASE
 req.body : {
             "record": "THE_ID_OF_AN_EXISTING_RECORD_IN_THE_CART",
             "quantity": new-quantity-as-number
             }
*/
export const updateItemFieldById = async (req, res, next) => {
  try {
    const { record, quantity } = req.body;

    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: { "items.$[item].quantity": quantity } },
      { arrayFilters: [{ "item.record": record }], new: true }
    ).populate("items.record");

    successHandler(res, 200, cart);
  } catch (error) {
    next(error);
  }
};

/* 
! Delete one item from the items array in the cart document

 PUT: http://localhost:8000/carts/THE_ID_OF_AN_EXISTING_CART_IN_THE_DATABASE
 req.body : {
    "record": "THE_ID_OF_AN_EXISTING_RECORD_IN_THE_CART" 
    }
*/
export const deleteCartItemById = async (req, res, next) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $pull: { items: req.body } },
      { new: true }
    ).populate("items.record");

    successHandler(res, 200, cart);
  } catch (error) {
    next(error);
  }
};
