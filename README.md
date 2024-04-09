## Title and Description

You may also find the frontend application part from this repository: https://github.com/syedmhdarif/ToDoApp

# ToDoApp
An application to add a new task to be perform. This application use React Native as a frontend framework, Express js and node js for the backend RESTful API, and MySql for the database.

## Table of Contents

- [Installation](#installation)
- [API and Its CRUD](#API)
- [Design](#design)

## Installation

### Database/server
1. cd To-Do-app && cd backend
2. npm install && npm start

### Frontend - ToDoApp 
You may also clone the application from this repository or get it from here: https://github.com/syedmhdarif/ToDoApp
1. npm install , cd ios and pod install the application
2. npx react-native run-ios (for ios) || npx react-native run-android (for android)
3. Test the application

## API 

1. Full API : http://localhost:3306/to-do/v1/items
2. router.get("/items", getItem);
3. router.get("/items/:id", getItemByIds);
4. router.get("/items/:title", getItemByTitles);
5. router.post("/items", createItems);
6. router.put("/items/:id", updateItemByIds);
7. router.delete("/items/:id", deleteItems);

## Design

<div style="display: flex; flex-direction: row;">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/To-do-app/backend/assets/screenshot1.png" alt="Home page" width="300" height="700">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/To-do-app/backend/assets/screenshot2.png" alt="Add New Task" width="300" height="700">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/To-do-app/backend/assets/screenshot3.png" alt="Edit/delete/update existing task" width="300" height="700">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/To-do-app/backend/assets/screenshot4.png" alt="Edit/delete/update existing task" width="300" height="700">
</div>
