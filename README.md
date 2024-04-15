# ToDoApp

You may also find the frontend application part from this repository: https://github.com/syedmhdarif/ToDoApp

## About
An application to add a new task to be perform. This application use React Native as a frontend framework, Express js and node js for the backend RESTful API, and MySql for the database.

## Table of Contents

- [Installation](#installation)
- [API and Its CRUD](#API)
- [Design](#design)

## Installation

### server.js
```bash
#Navigate to the project file
cd To-Do-app && cd backend

#Install the packages
npm install

#run the project
npm start
```

### mysql
```bash
#install mysql
npm install mysql

#login to mysql
mysql -p
123456

#paste the database code
CREATE DATABASE todoitems;
USE todoitems;

CREATE TABLE todoitems (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  status TINYINT(1) DEFAULT 0
);

INSERT INTO todoitems (id, title, description, status)
VALUES 
(1, 'Task 1', 'A note about something', false),
(2, 'Task 2', 'A note about something else', false);

```

### Docker
```bash
#Navigate to the project file
cd To-Do-app && cd backend

#build docker
docker-compose build

#run the docker
docker-compose up

```

### Frontend - ToDoApp 
You may also clone the application from this repository or get it from here: https://github.com/syedmhdarif/ToDoApp
1. npm install , cd ios and pod install the application
2. npx react-native run-ios (for ios) || npx react-native run-android (for android)
3. Test the application

## API 
Show also the implementation of CRUD
1. Full API : http://localhost:3306/to-do/v1/items
2. router.get("/items", getItem);
3. router.get("/items/:id", getItemByIds);
4. router.get("/items/:title", getItemByTitles);
5. router.post("/items", createItems);
6. router.put("/items/:id", updateItemByIds);
7. router.delete("/items/:id", deleteItems);

## Design

<div style="display: flex; flex-direction: row;">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/backend/assets/screenshot1.png" alt="Home page" width="300" height="700">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/backend/assets/screenshot2.png" alt="Add New Task" width="300" height="700">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/backend/assets/screenshot3.png" alt="Edit/delete/update existing task" width="300" height="700">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/backend/assets/screenshot4.png" alt="Edit/delete/update existing task" width="300" height="700">
</div>

## Design

<div style="display: flex; flex-direction: row;">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/backend/assets/screenshot1.png" alt="Home page" width="300" height="700">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/backend/assets/screenshot2.png" alt="Add New Task" width="300" height="700">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/backend/assets/screenshot3.png" alt="Edit/delete/update existing task" width="300" height="700">
  <img src="https://github.com/syedmhdarif/node-rest-api/blob/main/backend/assets/screenshot4.png" alt="Edit/delete/update existing task" width="300" height="700">
</div>
