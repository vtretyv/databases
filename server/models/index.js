var db = require('../db');
var qs = require ('querystring');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('this is models');
      db.connectedNow.query('SELECT * FROM messages;', function(error, results, field) {
        callback(JSON.stringify(results));
            
      });
      
      
    }, // a function which produces all the messages
    post: function (data) {
      //Open connection
      db.connectedNow.query('INSERT INTO messages (messageid,userid,roomid) values ' + data, function (error, results) {
        if (error) { console.log('ERROR'); throw error; }
      //Parse data NEEDED  
        console.log('data: ', data); 
        let pData = qs.parse(data);
        console.log('parsed data :', pData);
        console.log(results);
        return pData; 
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.connectedNow.query('SELECT * FROM users', function (error, results) {
        if (error) { console.log('ERROR'); throw error; }
      //Parse data NEEDED  
        return results;     
      });
      
    },
    post: function (data) {
      db.connectedNow.query('SELECT * FROM `users`', function (error, results) {
        if (error) { console.log('ERROR'); throw error; }
        data = results;
      //Parse data NEEDED  
        console.log('data: ', data); 
        let pData = qs.parse(data);
        console.log('parsed data :', pData);
        return pData; //How do we incorporate a callback?     
      });
    }
  }
};

