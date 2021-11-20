'use strict';

// dependicies
let async = require('async');
let AWS = require('aws-sdk');
let util = require('util');

let s3 = new AWS.S3();

// setup our lambda handler
exports.handler = function (event, context, callback) {
  console.log(event); // START HERE!! util.inspect(event, { depth })
  // run all functions that are dependent on the return from the function above
  async.waterfall();


  // let a user upload an image of any size
  let params = { "Bucket": 'eggBuket', "Key": 'uuid', "Body": "", "contentType": };
  s3.upload(params, function (err, data) {

  });

  // get images.json
  s3.getObject(); // get images.json
  // let a user update:Create, Delete, rename? a dictionary, an array of images, of all images
  // when uploaded -> dwnlod images.json(dictionary of images) -> array of objs(images), create array if none
  // return meta data obj = image: name, Size, type, etc
  // append ne wimage to dictionary
  // upload image.json to S3
}

