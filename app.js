const path = require("path");
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");

const app = express();
// app.use(express.static(path.join(__dirname, "public")));

app.use(helmet());

const limiter = rateLimit({
  max: 200,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP. Please try again in an hour.",
});
//
app.use("/app", limiter);
// body parser middleware
app.use(express.json());
app.use(cookieParser());
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());
// Data sanitization against XSS
app.use(xss());
app.use(hpp());
/////////////////ROUTES//////////////////
app.use("/app/v2/user", authRouter);
app.use("/app/v2/user", userRouter);

module.exports = app;
