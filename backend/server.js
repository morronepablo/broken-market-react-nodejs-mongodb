const app = require("./app");
const mongoose = require("mongoose");

const connectToMango = () => {
  const cs = process.env.MONGODB_CS;
  mongoose
    .connect(cs, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log("successfully connected to mongodb " + data.connection.host);
    })
    .catch((error) => {
      console.log(error);
    });
};

connectToMango();

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Our app is running on PORT " + port);
});
