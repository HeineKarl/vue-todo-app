const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Posts
router.get("/", async (req, res) => {
  const posts = await connectDB();
  res.send(await posts.find({}).toArray());
});

// Add Posts
router.post("/", async (req, res) => {
  const posts = await connectDB();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date(),
  });
  res.status(201).send();
});
// Delete Posts

router.delete("/:id", async (req, res) => {
  const posts = await connectDB();
  await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.status(200).send();
});

const connectDB = async () => {
  const client = await mongodb.MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  });
  return client.db("users").collection("posts");
};

module.exports = router;
