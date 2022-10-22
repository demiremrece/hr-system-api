require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const lepayaCoursesRouter = require('./routers/lepayaCourses');

const server = express();

const SERVER_PORT = process.env.PORT || 5001;

// Lets make the server accessible from all domains
server.use(cors());

// For basic security headers
server.use(helmet());

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.get('/healthz', (req, res) => {
  res.sendStatus(200);
});

server.use('/api/lepaya-courses', lepayaCoursesRouter);

server.listen(SERVER_PORT, () => {
  console.log(`API listening on: http://localhost:${SERVER_PORT}`);
});

module.exports = server;
