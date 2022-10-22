const express = require('express');
const lepayaCoursesMiddleware = require('../middlewares/lepaya-courses');

const router = express.Router();

router.get('/:id', lepayaCoursesMiddleware.getById);

module.exports = router;
