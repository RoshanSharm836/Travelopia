const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
const connection = (mongoose.connection = async () => {
  await mongoose.connect(
    `mongodb+srv://fastresume:roshan123@cluster0.l1u6alu.mongodb.net/Travelopia`
  );
});

module.exports = connection;
