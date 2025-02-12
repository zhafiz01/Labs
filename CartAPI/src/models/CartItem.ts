import { Schema, model } from "mongoose";


const CartItemSchema = new Schema(
  {
    product: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);


const CartItem = model("CartItem", CartItemSchema);
export default CartItem;
