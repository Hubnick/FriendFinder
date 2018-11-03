
var fiends = require("../data/fiends");


module.exports = function (app) {

  // Displays all characters

  app.get("/api/fiends", function (req, res) {
    res.json(fiends)
  });


  app.post("/api/fiends", function (req, res) {


    //  * Convert each user's results into a simple array of numbers (ex: `["5", 1, 4, 4, 5, 1, 2, 5, 4, 1]`).

    // parsedScores = [];

    // for (i = 0; i < req.scores.length; i++) {
    //   var n = parseInt(req.scores[i]);
    //   parsedScores.push(n);
    // }

    // function findTotal(data) {
    //   total = "";
    //   for (i = 0; i < data.length; i++) {
    //     total += data[i]
    //   }



      //  * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.

      //    * Example: 
      //      * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
      //      * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
      //      * Total Difference: **2 + 1 + 2 =** **_5_**
      //  * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
      //  * The closest match will be the user with the least amount of difference.
      res.json(fiendsData)
    });

};