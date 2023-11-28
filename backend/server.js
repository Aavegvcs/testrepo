const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const testRoute = require("./routes/routes");

const app = express();

app.use(cors());


app.listen(3000, function() {
    console.log("Server Started", 3000);
})

app.use("/app/v1/test",testRoute);