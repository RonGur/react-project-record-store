fetch = require('node-fetch');
axios = require('axios');

const CLIENT_URL = 'http://localhost:3000';
const SERVER_URL = 'http://localhost:5000';

console.log('----- Testing Results: -----')


fetch(`${CLIENT_URL}/login`)
    .then(res => res.status)
    .then(async (status) => {
        console.log("TEST #1: Fetched data from /login.");
        printPassedOrFailed(200, status);

        await fetch(`${SERVER_URL}/api/login`, {
            method: 'post',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({'username': 'admin', 'password': 'admin', 'remember_me': true})
        }).then(res => res.status)
            .then((status) => {
                console.log("Test #2: Send Post request with valid admin login credentials");
                printPassedOrFailed(200, status);
            });


        await fetch(`${SERVER_URL}/api/login`, {
            method: 'post',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({'username': 'notexist', 'password': 'notexist', 'remember_me': true})
        }).then(res => res.status)
            .then((status) => {
                console.log("Test #3: Send Post request with invalid login credentials");
                printPassedOrFailed(400, status);
            });


        await fetch(`${CLIENT_URL}/`).then(res => res.status)
            .then((status) => {
                console.log("TEST #4: Fetched data from / route.");
                printPassedOrFailed(200, status);
            });

        await fetch(`${SERVER_URL}/api/register`, {
            method: 'post',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'username': 'user', 'password': 'user'})
        }).then(res => res.status)
            .then((status) => {
                console.log("Test #5: Send Post request to sign up with valid new user credentials");
                printPassedOrFailed(200, status);
            });

        await fetch(`${SERVER_URL}/api/register`, {
            method: 'post',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'username': 'admin', 'password': 'admin'})
        }).then(res => res.status)
            .then((status) => {
                console.log("Test #6: Send Post request to sign up with admin credentials (in valid)");
                printPassedOrFailed(400, status);
            });

        // test home page
        await fetch(`${CLIENT_URL}/home`).then(res => res.status)
            .then((status) => {
                console.log("TEST #7: Fetched data from /home route.");
                printPassedOrFailed(200, status);
            });

        // test cart page
        await fetch(`${CLIENT_URL}/cart`).then(res => res.status)
            .then((status) => {
                console.log("TEST #8: Fetched data from /cart route.");
                printPassedOrFailed(200, status);
            });

        // test checkout page
        await fetch(`${CLIENT_URL}/about-us`).then(res => res.status)
            .then((status) => {
                console.log("TEST #9: Fetched data from /about-us route.");
                printPassedOrFailed(200, status);
            });

        // test store locator page
        await fetch(`${CLIENT_URL}/record-of-the-month`)
            .then(res => res.status)
            .then((status) => {
                console.log("TEST #10: Fetched data from /record-of-the-month route.");
                printPassedOrFailed(200, status);
            });
    });

async function printPassedOrFailed(expected, real) {
    console.log("Expected Returned status: " + expected);
    console.log("Returned status: " + real);
    if (expected === real) {
        console.log("TEST PASSED!");
        console.log();
    }
    else {
        console.error("TEST FAILED!")
        console.log();
    }
}