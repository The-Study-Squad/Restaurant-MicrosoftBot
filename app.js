var restify = require('restify');
var builder = require('botbuilder');
// Lets setup the Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
console.log('%s listening to %s', server.name, server.url);
});
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
appId: process.env.MICROSOFT_APP_ID,
appPassword: process.env.MICROSOFT_APP_PASSWORD
});
//get zomato ID and the api key 
// Listen for messages from users
server.post('/foodbot', connector.listen());
// Echo their message back
var bot = new builder.UniversalBot(connector, function (session) {
session.send("You said: %s", session.message.text);
});
