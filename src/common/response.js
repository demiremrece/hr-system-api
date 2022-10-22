/* eslint class-methods-use-this: ["off", { "enforceForClassFields": false }] */
class Response {
  success(data) {
    return {
      success: true,
      status: 200,
      result: data,
    };
  }

  error(error, status) {
    return {
      success: false,
      status,
      error,
    };
  }
}

module.exports = new Response();
