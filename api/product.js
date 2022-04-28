import express from "express";

const product = express.Router();

product.get(
  "/",
  async (req, res) => {
    try {
      res.json({
        status: 200,
        message: "Get data has successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server error");
    }
  },
  []
);

export default product;
