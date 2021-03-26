const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

//CREATE - POST
router.post("/product/create", createProduct);

//READ - GET {Get All products}
router.get("/products", getProducts);

//READ - GET {Get a Product}
router.get("/product/:productId", getProduct);

//UPDATE - PUT
router.put("/product/update/:productId", updateProduct);

//DELETE - DELETE
router.delete("/product/delete/:productId", deleteProduct);

module.exports = router;