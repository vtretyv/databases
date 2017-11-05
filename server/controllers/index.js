var models = require('../models');

module.exports = {
  headers: {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10 // Seconds.
  },
  messages: {
    get: function (req, res) {
      //res.send('hi');
      console.log('in controller');
      models.messages.get(function(results) {
        console.log('results in controller', results);
        res.send(results);
      });
    }, // a function which handles a get request for all messages
    post: function (data) {
      //res.writeHead(201, 'POST request okay');
      models.messages.post(data);
      // let data;
      // data = models.messages.post();
      // cb(data);
      //res.end(data); -> this will be callback
    } // a function which handles posting a message to the database
  },
  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(results) {
        console.log('results in controller', results);
        res.send(results);
      });
    },
    post: function (data) {
      data = models.users.post(data);

      //res.end(data); -> this will be callback 
    }
  }
};
