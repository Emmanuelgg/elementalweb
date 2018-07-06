const express = require('express');
const router = express.Router();
const app = express();

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var db;
// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) return console.log(err);
        db = client.db('elemental');
        closure(db);
        client.close();

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

// passport.use(new LocalStrategy(
//     function(username, password, done) {
//         console.log(username);
//         db.collection('user').findOne({ username: username }, function(err, user) {
//
//             if (err) { return done(err); }
//             if (!user){
//                       return done(null, false, { message: 'Incorrect username.' });
//             }
//
//             if (!user.validPassword(password)){
//                 return done(null, false, { message: 'Incorrect password.' });
//             }
//             return done(null, false, { message: 'Incorrect password.' });
//         });
//     }
// ));

// router.post('/login', (req, res) => {
//     let username = req.body.form.username
//     passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true })
// });

// router.post('/login', passport.authenticate('local'),
//     function(req, res) {
//       // If this function gets called, authentication was successful.
//       // `req.user` contains the authenticated user.
//       let username = req.body.form.username
//       res.redirect('/users/' + username);
//     }
// );
//
// app.get('/api/users/',
//   passport.authenticate('basic', { session: false }),
//   function(req, res) {
//     res.json({ username: req.username });
//   });


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
