import mongoose from "mongoose";

const productSchema = new mongoose.Schema({ 
    name: String, 
    price: String 
});

// Xuất module đúng cách
const Product = mongoose.model("Products", productSchema);
export default Product;
