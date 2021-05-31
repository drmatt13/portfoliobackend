const express = require('express'); 
const cors = require("cors");
const colors = require('colors');

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

// Cookie parser
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

// Cors
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, access-control-allow-origin");
//   next();
// });
app.use(cors());

// app.use((req, res, next) => {
  
// });

const TEST = (req, res, next) => {
  if (req.headers.authorization) {
    console.log('AUTH:'.bgRed.black, req.headers.authorization);
  }
  next();
}

// Route files
const auth = require("./routes/auth");
const notes = require("./routes/notes");
const apps = require("./routes/apps");
const social = require("./routes/social");
const image = require("./routes/image");

// Mount routers
app.use("/auth", TEST, auth);
app.use("/notes", notes);
app.use("/apps", apps);
app.use("/social", social);
app.use("/image", image);

app.get('/', (req, res) => {
  res.status(200).json({ success: true });
})

// Error handling
const errorHandler = require('./middleware/error');
app.use(errorHandler);

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`.bold.yellow);
});