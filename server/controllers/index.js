var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let data;
      data = models.messages.post();
      res.end(data);
    } // a function which handles posting a message to the database
  },
  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get();
      
    },
    post: function (req, res) {
      let data;
      data = models.users.post();
      res.end(data); 
    }
  }
};
