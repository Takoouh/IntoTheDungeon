require("dotenv").config();
const express = require("express")
const connection = require("./conf");
const app = express();
const port = 3010;
const cors = require('cors');