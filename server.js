const express = require('express');
const cors = require("cors");

const app = express();

// get global variables
const dotenv = require('dotenv');
dotenv.config({path: __dirname + '/config/config.env'});

// Connect to DB
const connectDB = require('./config/connectDB');
connectDB();

// Set static folder
app.use(express.static(__dirname + '/public'));

// Body parser
app.use(express.json());

// Cors
app.use(cors());

// Routes
const notes = require("./routes/notes");
app.use("/notes", notes);

const apps = require("./routes/apps");
app.use("/apps", apps);

const auth = require("./routes/auth");
app.use("/auth", auth);

app.get('/', (req, res) => {
  res.status(200).json({ success: true });
})

// const upload = require("./routes/upload");
// app.use("/api/upload", upload); 

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});