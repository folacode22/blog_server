const Blog = require("../models/blog");
const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  console.log(req.body);
  // const title = req.body.title;
  // const description = req.body.description;
  // const likes = req.body.likes;
  // const comments = req.body.comments;

  const { title, description, likes, comments } = req.body;

  const newBlog = new Blog({
    title,
    description,
    likes,
    comments,
  });

  await newBlog.save();
  res.status(201).json(newBlog);
});

router.get("/blogs", async (req, res) => {
  const get_all_blogs = await Blog.find();
  return res.status(200).json(get_all_blogs);
});

router.put("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  // where _id from mongodb is equal to id from our request parameter
  const { title, description, likes, comments } = req.body;

  const update_blog = await Blog.findByIdAndUpdate(
    { _id: id },
    {
      // title,
      // description,
      // likes,
      // comments,
      ...req.body,
    },
    { new: true }
  );

  return res.status(200).json(update_blog);
});

router.delete("/blog/:id", async (req, res) => {
  const id = req.params.id;

  const delete_blog = await Blog.findOneAndRemove({ _id: id });
  return res.status(200).json("delete_blog successfully");
  // return res.status(204).json("");
});
module.exports = router;
