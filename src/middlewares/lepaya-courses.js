const Response = require('../common/response');

const getById = (req, res) => {
  try {
    const { id } = req.params;
    res.json(Response.success({ id }));
  } catch (error) {
    res.json(Response.error(error.message, 500));
  }
};

const getAll = (req, res) => {
  try {
    res.json(Response.success([{
      id: 'abcd-edfg', title: 'test', learners: [], trainer: {},
    }]));
  } catch (error) {
    res.json(Response.error(error.message, 500));
  }
};

module.exports = { getById, getAll };
