const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://natt:AgsxhkeNFi2SQKxg@cluster0.t8oi8.mongodb.net/twitter?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Connection mongoDB ok !");
  })
  .catch((err) => {
    console.error("Error connecting : " + err);
  });
