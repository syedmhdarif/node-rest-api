## Title and Description

# ToDoApp

An application to add a new task to be perform. This application use React Native as a frontend framework, Express js and node js for the backend RESTful API, and MySql for the database.

## Table of Contents

- [Installation](#installation)
- [API](#API)
- [Design](#design)

## API and its CRUD

1. normal API : http://localhost:3306/to-do/v1/items
2. router.get("/items", getItem);
3. router.get("/items/:id", getItemByIds);
4. router.get("/items/:title", getItemByTitles);
5. router.post("/items", createItems);
6. router.put("/items/:id", updateItemByIds);
7. router.delete("/items/:id", deleteItems);

## Design

<div style="display: flex; flex-direction: row;">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/To-do-app/backend/assets/screenshot1.png" alt="Home page" width="380" height="800">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/To-do-app/backend/assets/screenshot2.png" alt="Add New Task" width="380" height="800">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/To-do-app/backend/assets/screenshot3.png" alt="Edit/delete/update existing task" width="380" height="800">
</div>
