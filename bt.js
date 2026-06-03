const express = require("express");
const app = express();

app.use(express.json());

let books = [
  { id: 1, name: "C Programming", available: true },
  { id: 2, name: "Java", available: true }
];

let borrowCount = 0;

function roleCheck(role) {
  return (req, res, next) => {
    if (req.headers.role === role)
      next();
    else
      res.status(403).send("Unauthorized Access");
  };
}

function borrowLimit(req, res, next) {
  if (borrowCount >= 2)
    res.send("Borrow limit exceeded");
  else {
    borrowCount++;
    next();
  }
}

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/borrow/:id", roleCheck("student"), borrowLimit, (req, res) => {
  let book = books.find(b => b.id == req.params.id);

  if (!book)
    res.send("Book not found");
  else if (!book.available)
    res.send("Book already borrowed");
  else {
    book.available = false;
    res.send("Book borrowed successfully");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

