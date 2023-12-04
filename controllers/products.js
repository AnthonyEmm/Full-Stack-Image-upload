const Product = require("../models/products");
const cloudinary = require("cloudinary").v2;

// Create a new Product in DB //
const createProduct = async (req, res) => {
  try {
    const { name, price, owner } = req.body;

    const { path, filename } = req.file;
    const product = await Product.create({
      name,
      price,
      owner,
      image: { url: path, publicId: filename },
    });
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! Something went wrong");
  }
};

// Delete product from DB in Cloudinary //
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const response = await cloudinary.uploader.destroy(id);
  console.log(response);
};

// Upload file to server (testing) //
const testUpload = (req, res) => {
  console.log(req.body);
  console.log(req.file);
};

module.exports = {
  createProduct,
  testUpload,
  deleteProduct,
};
