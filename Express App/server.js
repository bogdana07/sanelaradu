// Dependencies-BOILERPLATE
// ===========================================================
var express = require("express");
var app = express();
const path = require("path");
var PORT = process.env.PORT || 3000;

//set up the express app to handle data parsing-BOILERPLATE
//pass post data to database
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

// Data
// ===========================================================
const rsvp = [];

const waitlist = [];


// Routes
// ===========================================================
// General route
// HTML Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, './public/tables.html'));
});

app.get("/form", function (req, res) {
    res.sendFile(path.join(__dirname, './public/form.html'));
});

// API Routes
//--call for 1st data array rsvp--
app.get('/api/rsvp', (req, res) => {
    return res.json(rsvp);
});

//--call for 2nd data array waitlist--
app.get('/api/waitlist', (req, res) => {
    return res.json(waitlist);
});

//--POST Route--
app.post('/api/tables', (req, res) => {
    //getting the raw data from client
    //format it for my database
    if (rsvp.length < 1) {
        rsvp.push(req.body);
        res.json(true);
    }
    else {
        waitlist.push(req.body);
        res.json(false);
    }
});

app.post('/api/clear', (req, res) => {
    rsvp.length = 0;
    waitlist.length = 0;
    res.json(true);
});

// Listener-BOILERPLATE
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});