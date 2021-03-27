const { json } = require("body-parser");
const pool = require("../config/db");

exports.createProduct = (req, res) => {
  try {
    const {
      product_name,
      product_desc,
      product_price,
      product_stock,
    } = req.body;
    const product = pool.query(
      "INSERT INTO product(product_name, product_desc, product_price, product_stock) VALUES ($1, $2, $3, $4) RETURNING *",
      [product_name, product_desc, product_price, product_stock],
      (err, product) => {
        if (err) {
          return res.status(400).json({
            success: "false",
            messsage: "Unable to CREATE Product!",
          });
        }
        res.status(200).json({
          success: "true",
          data: product.rows[0]
        });
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

exports.getProducts = (req, res) => {
  try {
    const products = pool.query("SELECT * FROM product", (err, products) => {
      if (err) {
        return res.status(400).json({
          success: "false",
          message: "Unable to GET All Products!",
        });
      }
      res.status(200).json(products.rows);
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.getProduct = (req, res) => {
  try {
    const { productId } = req.params;
    const product = pool.query(
      "SELECT * FROM product WHERE product_id=$1",
      [productId],
      (err, product) => {
        if (err) {
          return res.status(400).json({
            success: "false",
            message: "Unable to GET a product!",
          });
        }
        res.status(200).json(product.rows[0]);
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

exports.updateProduct = (req, res) => {
  try {
    const { productId } = req.params;
    const {
      product_name,
      product_desc,
      product_price,
      product_stock,
    } = req.body;
    const product = pool.query(
      "UPDATE product SET product_name=$1, product_desc=$2, product_price=$3, product_stock=$4 WHERE product_id=$5",
      [product_name, product_desc, product_price, product_stock, productId],
      (err, product) => {
        if (err) {
          return res.status(400).json({
            success: "false",
            message: "Unable to UPDATE a product!",
          });
        }
        res.status(200).json({
          success: "true",
          message: "Product is updated successfully!",
        });
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

exports.deleteProduct = (req, res) => {
  try {
    const { productId } = req.params;
    const product = pool.query(
      "DELETE FROM product WHERE product_id=$1",
      [productId],
      (err, product) => {
        if (err) {
          return res.status(400).json({
            success: "false",
            message: "Unable to DELETE a product!",
          });
        }
        res.status(200).json({
          success: "true",
          message: "Product is deleted successfully!",
        });
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};