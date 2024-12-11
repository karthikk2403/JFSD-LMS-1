const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

const db = mysql.createConnection({
  host: "localhost", 
  user: "root", 
  password: "Jprakash@123", 
  database: "lms ", 
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database.");
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Handle Login (POST request)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  });
});

// Handle Registration (POST request)
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(query, [username, email, password], (err, results) => {
    if (err) throw err;
    res.json({ success: true, message: "Registration successful" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
