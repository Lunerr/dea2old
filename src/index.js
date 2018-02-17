require('./extensions');
const path = require('path');
const patron = require('patron.js');
const client = require('./singletons/client.js');
const registry = require('./singletons/registry.js');
const credentials = require('./credentials.json');
const db = require('./database');

client.registry = registry;

patron.RequireAll(path.join(__dirname, 'events'));

(async () => {
  client.login(credentials.token);
  db.connect(credentials.mongodbConnectionURL);
})()
  .catch((err) => console.log(err));
