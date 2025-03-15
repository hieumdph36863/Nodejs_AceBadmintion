import express from 'express';
import { create, getAll, getDetail, remove, update } from '../controllers/productController.js';
const routerProduct = express.Router()


routerProduct.get("/", getAll)
routerProduct.get("/:id", getDetail)
routerProduct.post("/create", create)
routerProduct.put("/update", update)
routerProduct.delete("/remove", remove)



export default routerProduct