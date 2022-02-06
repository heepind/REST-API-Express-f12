const express = require("express");
const bodyParser = require("body-parser");

// import Routes
const RegistrationRouter = require("./routes/usersRouter");

// Import Database
const db = require("./data/config/database");
const { json } = require("body-parser");
db.authenticate()
.then(() => console.log("Database conected... "))
.catch(err => console.log("Connection error => ", err));

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req,res, next) => {
    console.log("Request => ", new Date());
    next();
});

app.use("/api/users", RegistrationRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))




