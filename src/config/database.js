const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URLURI, {
  useNewUrlParser: true
})
  .then(db => console.log("DB is connected"))
  .catch(err => console.log(err));