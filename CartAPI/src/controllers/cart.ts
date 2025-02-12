import CartItem from "../models/CartItem";
import HTTPHandler from "../utils/HTTPHandler";


export const getCartItems: HTTPHandler = async (req, res) => {
  try {
    const { maxPrice, prefix, pageSize } = req.query;
    let filter: any = {};

    if (maxPrice) filter.price = { $lte: parseFloat(maxPrice as string) };
    if (prefix) filter.product = { $regex: `^${prefix}`, $options: "i" };

    let cartItems = await CartItem.find(filter);
    if (pageSize) cartItems = cartItems.slice(0, parseInt(pageSize as string));

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};


export const getCartItemById: HTTPHandler = async (req, res) => {
  try {
    const item = await CartItem.findById(req.params.id);
    if (!item) return res.status(404).send("ID Not Found");
    res.status(200).json(item);
  } catch (error) {
    res.status(404).send("Internal Server Error");
  }
};


export const addCartItem: HTTPHandler = async (req, res) => {
  try {
    const newItem = new CartItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).send("Bad Request");
  }
};


export const updateCartItem: HTTPHandler = async (req, res) => {
  try {
    const updatedItem = await CartItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedItem) return res.status(404).send("ID Not Found");
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};


export const deleteCartItem: HTTPHandler = async (req, res) => {
  try {
    const deletedItem = await CartItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).send("ID Not Found");
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
