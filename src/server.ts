import express from "express";
import config from "config";

require("dotenv").config();

const app = express();

const HOST = config.get('host');

const PORT = config.get('port');

app.listen(PORT, () => {
  console.log(`SERVER RUNNING on HOST:${HOST} PORT:${PORT}`);
});
