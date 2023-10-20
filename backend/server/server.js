import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import "dotenv/config";
import { connectToDb } from "./db.js";

import appRoutes from "../routes/appRoutes.js";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/", appRoutes);

const PORT = process.env.PORT || 3000;

connectToDb(() => {
  console.log("Trying to connect to database");
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
