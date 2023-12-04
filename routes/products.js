const express = require("express");
const {
  createProduct,
  testUpload,
  deleteProduct,
} = require("../controllers/products");
const uploadImage = require("../middlewares/uploadImage");
const productsRouter = express.Router();

productsRouter.route("/").post(uploadImage.single("image"), createProduct);
productsRouter.route("/test").post(uploadImage.single("image"), testUpload);
productsRouter.route("/:id").delete(deleteProduct);

module.exports = productsRouter;
