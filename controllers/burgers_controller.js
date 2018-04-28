//router.get returns all burgers in console
//router.post CANNOT POST
//router.put DOES NOT WORK
//router.delete deletes everything in the database

var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(allBurgers) {
    console.log(allBurgers);
  });
});

// Create a new burger
router.post("api/burgers", function(req, res) {
  burger.create(req.body.name, function(newBurger) {
    res.send(newBurger);
  });
});

// router.put("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
//   burger.update(
//     {
//       sleepy: req.body.sleepy
//     },
//     condition,
//     function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     }
//   );
// });

// Delete a burger
router.delete("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.delete(condition, function(res) {
    if (res.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
