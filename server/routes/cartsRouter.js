import express from "express";
import {
  addCartItem,
  deleteCartItemById,
  getCart,
  updateItemFieldById,
} from "../controllers/cartsController.js";

const router = express.Router();

router
  .route("/:id")
  .get(getCart)
  .post(addCartItem)
  .put(deleteCartItemById)
  .patch(updateItemFieldById);

export default router;
