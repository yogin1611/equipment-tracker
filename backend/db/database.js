const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "equipment.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening DB", err);
  } else {
    console.log("Connected to SQLite database");

    db.run(`
      CREATE TABLE IF NOT EXISTS equipment (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        type TEXT NOT NULL,
        status TEXT NOT NULL,
        lastCleaned TEXT
      )
    `);
  }
});

module.exports = db;
