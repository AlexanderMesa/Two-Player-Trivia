var db = require("../models");

module.exports = function(app) {
  // Get a question
  app.get("/api/question", function(req, res) {
    db.trivia_db.findOne({}).then(function(trivia_db) {
      let dbQuery = "SELECT * FROM questions";

      connection.query(dbQuery, function(err, result) {
        if (err) throw err;

        res.json(trivia_db);
      });
    });
  });

  // Create a new user
  app.post("/api/newUser", function(req, res) {
    db.trivia_db.create(req.body).then(function(dbExample) {
      let dbQuery = "INSERT INTO users (user_name, passwords) VALUES (?,?)";
      if (err) throw err;
      console.log("New user successfully added");
      res.end();
    });
  });
}; //delete if bottom is un-commented

// Delete an user by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(
//       dbExample
//     ) {
//       res.json(dbExample);
//     });
//   });
// };
