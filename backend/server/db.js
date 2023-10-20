import mongoose from "mongoose";

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@newsletter.csmhsoi.mongodb.net/database?retryWrites=true&w=majority`;

const connectToDb = (cb) => {
  cb();
  mongoose.set("strictQuery", true);
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected successfuly");
    })
    .catch((error) => {
      console.log("connection has an error -->", error);
    });
};

export { connectToDb };
