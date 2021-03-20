
exports.handler = async function(event, context) {
  const datetime = new Date();
  const datetimestring = datetime.toUTCString();
return {
      statusCode: 200,
      body: datetimestring,
      headers: {
        "Access-Control-Allow-Origin": "*",        
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTION",
      },
  };
}