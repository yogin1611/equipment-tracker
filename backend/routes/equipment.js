const express = require("express");
const db = require("../db/database");

const router = express.Router();

/**
 * GET /api/equipment
 * Supports:
 * - search
 * - type
 * - status
 * - sortBy
 * - order
 */
router.get("/", (req, res) => {
  const { search, type, status, sortBy, order } = req.query;

  let query = "SELECT * FROM equipment WHERE 1=1";
  const params = [];

  // Search by name
  if (search) {
    query += " AND name LIKE ?";
    params.push(`%${search}%`);
  }

  // Filter by type
  if (type) {
    query += " AND type = ?";
    params.push(type);
  }

  // Filter by status
  if (status) {
    query += " AND status = ?";
    params.push(status);
  }

  // Sorting (safe whitelist)
  const allowedSortFields = ["name", "type", "status", "lastCleaned"];
  if (allowedSortFields.includes(sortBy)) {
    query += ` ORDER BY ${sortBy} ${
      order === "desc" ? "DESC" : "ASC"
    }`;
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// ADD equipment
router.post("/", (req, res) => {
  const { name, type, status, lastCleaned } = req.body;

  const query = `
    INSERT INTO equipment (name, type, status, lastCleaned)
    VALUES (?, ?, ?, ?)
  `;

  db.run(query, [name, type, status, lastCleaned], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      id: this.lastID,
      name,
      type,
      status,
      lastCleaned,
    });
  });
});

// UPDATE equipment
router.put("/:id", (req, res) => {
  const { name, type, status, lastCleaned } = req.body;

  const query = `
    UPDATE equipment
    SET name = ?, type = ?, status = ?, lastCleaned = ?
    WHERE id = ?
  `;

  db.run(
    query,
    [name, type, status, lastCleaned, req.params.id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "Updated successfully" });
    }
  );
});

// DELETE equipment
router.delete("/:id", (req, res) => {
  db.run(
    "DELETE FROM equipment WHERE id = ?",
    req.params.id,
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "Deleted successfully" });
    }
  );
});

module.exports = router;
