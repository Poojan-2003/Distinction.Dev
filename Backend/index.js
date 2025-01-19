import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
// const pool = mysql.createPool({
//   host: 'bbubr70jwc1ukmjaw5nx-mysql.services.clever-cloud.com',
//   user: 'uvfmnc0uuw5vghqo',
//   password: 'kU914M6R2oQZNtLJVWxR',
//   database: 'bbubr70jwc1ukmjaw5nx',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: process.env.DB_WAIT_FOR_CONNECTIONS === 'true',
  connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT, 10),
  queueLimit: parseInt(process.env.DB_QUEUE_LIMIT, 10),
});

// Jobs Routes
app.get('/api/jobs', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM job');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/jobs', async (req, res) => {
  try {
    const { department, salary } = req.body;
    const [result] = await pool.query(
      'INSERT INTO job (department, salary) VALUES (?, ?)',
      [department, salary]
    );
    res.status(201).json({ id: result.insertId, department, salary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/jobs/:id', async (req, res) => {
  try {
    const { department, salary } = req.body;
    await pool.query(
      'UPDATE job SET department = ?, salary = ? WHERE id = ?',
      [department, salary, req.params.id]
    );
    res.json({ id: req.params.id, department, salary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/jobs/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM job WHERE id = ?', [req.params.id]);
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Persons Routes
app.get('/api/persons', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM persons');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/persons', async (req, res) => {
  try {
    const { name, company, age } = req.body;
    const [result] = await pool.query(
      'INSERT INTO persons (name, company, age) VALUES (?, ?, ?)',
      [name, company, age]
    );
    res.status(201).json({ id: result.insertId, name, company, age });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/persons/:id', async (req, res) => {
  try {
    const { name, company, age } = req.body;
    await pool.query(
      'UPDATE persons SET name = ?, company = ?, age = ? WHERE id = ?',
      [name, company, age, req.params.id]
    );
    res.json({ id: req.params.id, name, company, age });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/persons/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM persons WHERE id = ?', [req.params.id]);
    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Companies Routes
app.get('/api/companies', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM companies');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/companies', async (req, res) => {
  try {
    const { name, built_date, ceo } = req.body;
    const [result] = await pool.query(
      'INSERT INTO companies (name, built_date, ceo) VALUES (?, ?, ?)',
      [name, built_date, ceo]
    );
    res.status(201).json({ id: result.insertId, name, built_date, ceo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/companies/:id', async (req, res) => {
  try {
    const { name, built_date, ceo } = req.body;
    await pool.query(
      'UPDATE companies SET name = ?, built_date = ?, ceo = ? WHERE id = ?',
      [name, built_date, ceo, req.params.id]
    );
    res.json({ id: req.params.id, name, built_date, ceo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/companies/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM companies WHERE id = ?', [req.params.id]);
    res.json({ message: 'Company deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/health', async (req, res) => {
  try {
    // Run a simple query to check the connection
    await pool.query('SELECT 1');
    res.json({ message: 'Database connected successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Database connection failed: ' + error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});