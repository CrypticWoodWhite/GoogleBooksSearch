const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const router = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001;
// const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
}

app.use("/api/books", router);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks", {
    useNewUrlParser: true
}).catch(err => console.log(err));
mongoose.connection.on("open", ref => {
    console.log("Connected to mongo server");
});
mongoose.connection.on("error", err => {
    console.log(err);
});

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});