import express, { json, response } from "express";

//set up the port automatically by allowing the API to be deployed to a cloud platform like AWS or Azure
//default will use 3000
const PORT = process.env.PORT || 3000;

//set up Express to create an app and configure it to parse requests with JSON payloads.
const app = express();
app.use(json());

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

//define a status endpoint
// app.get("/status", (request, response));

app.get("/users", (request, response) => {
  const users = [
    { id: 1, name: "John sina" },
    { id: 2, name: "Jane Smith" },
  ];

  response.json(users);
});
