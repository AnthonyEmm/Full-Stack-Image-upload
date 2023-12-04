const express = require("express");
const cors = require("cors");
require("dotenv/config");
require("./db");

const usersRouter = require("./routes/user");
const productsRouter = require("./routes/products");

const app = express();
const port = 4000;

app.use(express.static("uploads"));
app.use(express.json());
app.use(cors());

app.use("/user", usersRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
