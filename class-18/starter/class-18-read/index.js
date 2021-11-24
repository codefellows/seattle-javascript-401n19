'use strict';

const friendModel = require('./friends.schema');

exports.handler = async (event) => {

  console.log('EVENT', event);

  try {

    // either there is or is not an id
    const id = event.pathParameters && event.pathParameters.id;

    let data;

    if (id) {
      const list = await friendModel.query('id').eq(id).exec();
      console.log('LIST', list);
      data = list[0];
    } else {
      data = await friendModel.scan().exec();
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }

  } catch (err) {
    return {
      statusCode: 500,
      response: err.message
    }
  }

}