
exports.handler = async function(event, context) {
  return {
      statusCode: 200,
      body: new Date.toISOString()
  };
}