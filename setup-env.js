import { resolve } from "path";
const ENV = process.env.NODE_ENV;

require("dotenv").config({
  path: resolve(__dirname, "./config/", `.env.${ENV}`),
}); // Load dotenv for non-Jest files
