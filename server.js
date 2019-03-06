const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://admin:pass@testmerncluster-shard-00-00-eymo3.mongodb.net:27017,testmerncluster-shard-00-01-eymo3.mongodb.net:27017,testmerncluster-shard-00-02-eymo3.mongodb.net:27017/test?ssl=true&replicaSet=TestMERNCluster-shard-0&authSource=admin&retryWrites=true",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
