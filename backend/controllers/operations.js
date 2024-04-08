// controllers/items.js

const {
  getItems,
  getItemById,
  getItemByTitle,
  createItem,
  updateItemById,
  deleteItem,
} = require("./services");

// Sample in-memory data store
let items = [
  {
    id: 1,
    title: "Call Mom",
    desc: "Call mom when you arrive home",
    status: false,
  },
  { id: 2, title: "Cook", desc: "Prepare a proper meal", status: false },
  {
    id: 3,
    title: "Post an item",
    desc: "A buyer from Johor need that item before 29th May",
    status: false,
  },
];

// Get all items
function getItem(req, res) {
  // res.json(items);
  getItems((err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json(results);
  });
}

// Get single item by ID
function getItemByIds(req, res) {
  const id = parseInt(req.params.id);
  getItemById(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      res.status(404).json({ error: "Item not found" });
      return;
    }

    res.json(results);
  });
  // const item = items.find((item) => item.id === id);
  // if (!item) {
  //   res.status(404).json({ error: "Item not found" });
  //   return;
  // }
  // res.json(item);
}

// Get single item by title
function getItemByTitles(req, res) {
  const title = parseInt(req.params.title);
  getItemByTitle(title, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      res.status(404).json({ error: "Item not found" });
      return;
    }

    res.json(results);
  });
  // const item = items.find((item) => item.title === title);
  // if (!item) {
  //   res.status(404).json({ error: "Item not found" });
  //   return;
  // }
  // res.json(item);
}

// Create a new item
function createItems(req, res) {
  const newItem = req.body;

  createItem(newItem, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection errror",
      });
    }
    return res.status(200).json(results);
  });
  // items.push(newItem);
  // res.status(201).json(newItem);
}

// Update an item by ID
function updateItemByIds(req, res) {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  updateItemById(updatedItem, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: "updated successfully",
    });
  });
  // const index = items.findIndex((item) => item.id === id);
  // if (index === -1) {
  //   res.status(404).json({ error: "Item not found" });
  //   return;
  // }
  // items[index] = { ...items[index], ...updatedItem };
  // res.json(items[index]);
}

// Delete an item by ID
function deleteItems(req, res) {
  const id = parseInt(req.params.id);

  deleteItem(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Record Not Found",
      });
    }
    return res.json({
      success: 1,
      message: "user deleted successfully",
    });
  });
  // items = items.filter((item) => item.id !== id);
  // res.status(204).end();
}

module.exports = {
  getItem,
  getItemByIds,
  getItemByTitles,
  createItems,
  updateItemByIds,
  deleteItems,
};
