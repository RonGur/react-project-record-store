const express = require('express');
const router = express.Router();
const low = require('lowdb');

// Database setup
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

// Set DB tables
db.defaults({ users: []}, {activityLog: []})
    .write()

router.post('/register', function (req, res) {

    let existUser =  db.get('users')
        .find({username: req.body.username})
        .value()
    if(existUser != undefined) {
        res.status(400).json({message: 'This username is taken, please try again.'});
    } else {
        db.get('users')
            .push({username: req.body.username, password: req.body.password})
            .write()
        res.status(200).json({message: 'Thank you! Your registration was successful! You are moving to login page '});
    }
});

function verifyLogin(username, password) {
   return  db.get('users')
        .find({username: username, password: password})
        .value() !== undefined;
}


router.post('/login', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let isRegistered = verifyLogin(username, password)
    if (isRegistered) {
        const cookieLiveTime = (req.body.remember_me == true) ? {} : {maxAge: 600000};
        res.cookie('username', req.body.username, cookieLiveTime);
        return res.status(200).json({message: 'Logged in successfully.'});
    } else {
        return res.status(400).json({message: 'Username does not match password or does not exist, please try again.'});
    }
});

router.post('/log-activity', (req, res) => {
    let username = req.body.username;
    let timestamp = req.body.timestamp;
    let activity = req.body.activity;
    db.get('activityLog')
        .push({username: username, timestamp: timestamp, activity: activity})
        .write();
    return res.status(200).json({message: 'Activity added to Activity Log'});
});
module.exports = router;

router.get('/log-activity', async (req, res) => {
    const activityLog = db.get('activityLog')
        .value();
    return res.status(200).json(activityLog);
});