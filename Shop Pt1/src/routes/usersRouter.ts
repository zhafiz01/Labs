import { Router } from "express";
import { getUser, postUser, putUser, deleteUser } from "../controllers/users";

const routes = Router();

routes.post("/", postUser);
routes.get("/:id", getUser);
routes.put("/:id", putUser);
routes.delete("/:id", deleteUser);

export default routes;
