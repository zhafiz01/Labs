import { Router } from "express";
import {
  getCartItems,
  getCartItemById,
  addCartItem,
  updateCartItem,
  deleteCartItem
} from "../controllers/cart";  

const router = Router();

router.get("/", getCartItems);          
router.get("/:id", getCartItemById);    
router.post("/", addCartItem);          
router.put("/:id", updateCartItem);     
router.delete("/:id", deleteCartItem);  

export default router;
