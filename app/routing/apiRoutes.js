// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

// app.get("/api/friends", function(req, res) {
//   res.json(friendData);
// });

// app.get("/api/waitlist", function(req, res) {
//   res.json(waitListData);
// });

// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a reservation request... this data is then sent to the server...
// Then the server saves the data to the tableData array)
// ---------------------------------------------------------------------------

// app.post("/api/friends", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body-parser middleware
//     if (friendData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

// //   // ---------------------------------------------------------------------------
// //   // I added this below code so you could clear out the table while working with the functionality.
// //   // Don"t worry about it!

// //   app.post("/api/clear", function(req, res) {
// //     // Empty out the arrays of data
// //     tableData.length = [];
// //     waitListData.length = [];

// //     res.json({ ok: true });
//   })







//   // Displays a single character, or returns false
//   app.get("/api/characters/:character", function (req, res) {
//     var chosen = req.params.character;

//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }

//     return res.json(false);
//   });

//   // Create New Characters - takes in JSON input
//   app.post("/api/characters", function (req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body-parser middleware
//     var newcharacter = req.body;

//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newcharacter);

//     characters.push(newcharacter);

//     res.json(newcharacter);
//   });

// };


module.exports = function (app) {

  // Displays all characters

  app.get("/api/friends", function (req, res) {
    res.json(friendsData)
  });


  app.post("/api/friends", function (req, res) {
    res.json(req.body)
  });

};