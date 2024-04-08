require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const itemsRouter = require("./frontend/backend/controllers/routes");

const app = express();

const corsOptions = { origin: "http://localhost:3306/" };
app.use(cors(corsOptions));

//parse requests with JSON payloads.
app.use(bodyParser.json());

//start path with /api
app.use("/to-do/v1", itemsRouter);

//set up the port automatically by allowing the API to be deployed to a cloud platform like AWS or Azure
//set PORT default will use 3000
const PORT = process.env.MYSQL_PORT || process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
