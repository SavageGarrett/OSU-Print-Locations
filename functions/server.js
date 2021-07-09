'use strict';
var mongo = require('mongodb')
var MongoClient = mongo.MongoClient

exports.handler = async function(event, context, callback) {
    if(event.httpMethod === 'GET' && event.path === '/.netlify/functions/server/') {

      // connect to your cluster
      const client = await MongoClient.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
      });

      // specify the DB's name
      const db = client.db('OSU-3D-Printing');

      // execute find query
      const locations = await db.collection('locations').find({}).toArray();
      console.log(locations);

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(locations)
      });

      // close connection
      client.close();
      
    } else {
      callback(null, {
        statusCode: 400,
        body: {}
      });
    }
    console.log(event.httpMethod, event.path)
  }