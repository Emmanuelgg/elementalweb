const express = require('express');
const router = express.Router();
const app = express();

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var db;
// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) return console.log(err);
        db = client.db('elemental');
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

//get table
router.post('/get/all', (req, res) => {
    connection((db) => {
        db.collection(req.body.collection.toString())
            .find()
            .sort(req.body.order)
            .limit(req.body.limit)
            .toArray()
            .catch((err) => {
                sendError(err, res);
                response.message = {success:"",error:err};
                res.send(response);
            })
            .then((result) => {
                response.data = result;
                response.status = 200;
                response.message = {success:"Se obtuvieron los registros correctamente",error:""};
                res.send(response);
            });
    });
});

//get table distinct
router.post('/get/distinct', (req, res) => {
    connection((db) => {
        db.collection(req.body.collection.toString())
            .distinct(req.body.distinct)
            .catch((err) => {
                sendError(err, res);
                response.message = {success:"", error:err};
                res.send(response);
            })
            .then((result) => {
                response.data = result;
                response.status = 200;
                response.message = {success:"Se obtuvieron los registros correctamente", error:""};
                res.send(response);
            });
    });
});

//inset table
router.post('/save', (req, res) => {
    if (req.body.form && req.method === 'POST') {
        if (req.body.form.counter)
            req.body.form.ip_address = req.header('x-forwarded-for') || req.connection.remoteAddress
        connection((db) => {
            db.collection(req.body.collection.toString())
            .save(req.body.form)
            .catch((err) => {
                sendError(err, res);
                response.message = {success:"",error:err};
                res.send(response);
            }).then((result) => {
                response.status = 200;
                response.message = {success:"Se a guardado correctamente",error:""};
                res.send(response);
            });
        });
    }
});

module.exports = router;
