const express=require("express");
const cors = require("cors");
const auth=require("./route/auth");
require("./connection/conn");

const app=express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hey this data breach monitoring system!");
});
app.use("/api/v1",auth);
app.listen(1999, () => {
    console.log('Server is running on http://localhost:1999');
});