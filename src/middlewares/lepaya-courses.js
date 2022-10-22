const fetch = require('node-fetch');
const Response = require('../common/response');

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch the course
    const courseResponse = await fetch(`${process.env.LEPAYA_EXTERNAL_API_URL}/api/courses/${id}`)
      .then((response) => response.json());

    if (courseResponse.error) {
      return res.status(courseResponse.statusCode)
        .json(Response.error(courseResponse.error, courseResponse.statusCode));
    }

    const course = { ...courseResponse };
    delete course.trainerId;

    // Fetch trainer
    const trainer = await fetch(`${process.env.LEPAYA_EXTERNAL_API_URL}/api/trainers/${courseResponse.trainerId}`)
      .then((response) => response.json());

    course.trainer = trainer;

    // Fetch learners
    const learnersFetchPromiseArray = [];
    courseResponse.learners.forEach((learnerId) => {
      learnersFetchPromiseArray.push(fetch(`${process.env.LEPAYA_EXTERNAL_API_URL}/api/learners/${learnerId}`)
        .then((response) => response.json()));
    });

    // No need to do it sync, lets just grab learners and the trainer async
    await Promise.all(learnersFetchPromiseArray).then(((responses) => {
      course.learners = responses;
    }));

    return res.json(Response.success(course));
  } catch (error) {
    return res.json(Response.error(error.message, 500));
  }
};

module.exports = { getById };
