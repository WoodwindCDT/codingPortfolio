// routes used for handling and requesting our data
const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

// The router will be added as a middleware and will take control of requests starting with path /record.
const dataRoutes = express.Router();
 
// connect to db from object returned in db/connection.js
const connectDB = require("../db/connection");
 
// to convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
// list of all the things.
dataRoutes.route("/data").get(function (req, res) {
  const db_connect = mongoose.connection;
  const db_collection = db_connect.collection("portdata");
  db_collection.findOne({_id: new ObjectId(process.env.ID)}, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});
 
// get a single thing by id
dataRoutes.route("/data/:id").get(function (req, res) {
 let db_connect = connectDB.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("portdata")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

// inq -> email interest
// create a new inquiry record.
dataRoutes.route("/data/add").post(function (req, response) {
 let db_connect = connectDB.getDb();
 let myobj = {
   name: req.body.name,
   email: req.body.email,
   company_name: req.body.company_name
 };
 db_connect.collection("inq").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// update a record by id.
dataRoutes.route("/data/:id").post(function (req, response) {
 let db_connect = connectDB.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     name: req.body.name,
     category: req.body.category,
     priority: req.body.priority,
     content: req.body.content
   },
 };
 db_connect
   .collection("portdata")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// delete a inq
dataRoutes.route("/inq/:id").delete((req, response) => {
 let db_connect = connectDB.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("inq").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});

// delete a thing
dataRoutes.route("/:id").delete((req, response) => {
 let db_connect = connectDB.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("portdata").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = dataRoutes;