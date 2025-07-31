const AWS = require('aws-sdk');
const costExplorer = new AWS.CostExplorer({ region: 'us-east-1' });

module.exports.getCosts = async (event) => {
  const params = {
    TimePeriod: {
      Start: '2024-07-01',
      End: '2024-07-31'
    },
    Granularity: 'DAILY',
    Metrics: ['UnblendedCost']
  };

  try {
    const data = await costExplorer.getCostAndUsage(params).promise();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving costs', error: error.message })
    };
  }
};
