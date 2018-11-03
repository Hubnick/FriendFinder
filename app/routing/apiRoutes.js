
var fiends = require("../data/fiends");


module.exports = function (app) {

 

  app.get("/api/fiends", function (req, res) {
    res.json(fiends);
  });


  app.post("/api/best", function (req, res) {

    var bestMaster = {
      fiendName: "",
      foulPhoto: "",
      fiendDifference: Infinity
    };

    var pawnData = req.body;
    var pawnScore = pawnData.pawnScore;

    var totalDifference;

    for (var i = 0; i < fiends.length; i++) {
      var currentFiend = fiends[i];
      console.log(currentFiend)
      totalDifference = 0;
console.log(totalDifference)
      totalDifference += Math.abs(pawnScore - fiends[i].fiendScore);

      if (totalDifference <= bestMaster.fiendDifference) {
        bestMaster.fiendName = currentFiend.fiendName;
        bestMaster.foulPhoto = currentFiend.foulPhoto;
        bestMaster.fiendDifference = totalDifference;
        console.log(bestMaster);
      }
    }

    res.json(bestMaster);

  });

  

};