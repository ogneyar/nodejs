console.log("smtp.js running");

var express = require('express');
// const express = require('express');
const expressMail = require('express-mail');
const app = express.createServer();
expressMail.extend(app, {
transport: 'SMTP',
config: {
service: 'Gmail',
auth: { user: 'gmail.user@gmail.com', pass: 'userpass' }
},
defaults: { from: 'gmail.user@gmail.com' }
});