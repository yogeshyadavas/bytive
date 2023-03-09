const router = require("express").Router();
const Company = require("../models/user");

router.route("/").get((req, res) => {
  Company.find()
    .then((users) => { 
      const response = {
        success: true,
        data: users, 
        message: "Successfully retrieved users",
      };
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
      const response = {
        success: false,
        message: "Failed to retrieve users",
      };
      res.status(500).json(response);
    });
});

module.exports = router;
