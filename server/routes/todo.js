const express = require("express");
const { Todo } = require("../models");
const router = express.Router();

// 기본주소: localhost:PORT/

// GET localhost:PORT/todos - show all todos (READ)
router.get("/todos", async (req, res) => {
  // Todo.findAll().then((data) => {
  //   console.log(data);
  //   res.send(data);
  // });

  try {
    let data = await Todo.findAll();
    console.log(data);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

// POST localhost:PORT/todo - create a new todo (CREATE)
router.post("/todo", async (req, res) => {
  try {
    let newTodo = await Todo.create({
      title: req.body.title,
      // done 디폴트값 있기 때문에 안 써줘도 ok
    });
    console.log(newTodo);
    res.send(newTodo);
  } catch (err) {
    res.send(err);
  }
});

// 내보내기
module.exports = router;