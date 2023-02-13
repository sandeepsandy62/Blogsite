const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const uri =
  "mongodb+srv://sandeepgogarla:SandeepGogarla27@cluster0.uzzaylr.mongodb.net/?retryWrites=true&w=majority";
const dbName = "blogdatabase";

app.post("/api/data", (req, res) => {
  MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
    const collection = db.collection("posts");

    collection.insertOne(req.body, (err, result) => {
      if (err) throw err;

      res.send({ message: "Data was successfully uploaded to the Database" });
      client.close();
    });
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
