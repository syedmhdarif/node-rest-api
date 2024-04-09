## Title and Description

# ToDoApp

An application to add a new task to be perform. This application use React Native as a frontend framework, Express js and node js for the backend RESTful API, and MySql for the database.

## Table of Contents

- [Installation](#installation)
- [API](#API)
- [Design](#design)

## API and its CRUD

normal API : http://localhost:3306/to-do/v1/items \n
router.get("/items", getItem);
router.get("/items/:id", getItemByIds);
router.get("/items/:title", getItemByTitles);
router.post("/items", createItems);
router.put("/items/:id", updateItemByIds);
router.delete("/items/:id", deleteItems);


