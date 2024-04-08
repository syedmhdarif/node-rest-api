const express = require("express");
const router = express.Router();

const {
  getItem,
  getItemByIds,
  getItemByTitles,
  createItems,
  updateItemByIds,
  deleteItems,
} = require("./operations");

// Routes for CRUD operations
router.get("/items", getItem);
router.get("/items/:id", getItemByIds);
router.get("/items/:title", getItemByTitles);
router.post("/items", createItems);
router.put("/items/:id", updateItemByIds);
router.delete("/items/:id", deleteItems);

module.exports = router;
