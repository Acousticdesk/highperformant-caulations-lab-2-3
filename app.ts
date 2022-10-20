import * as createError from "http-errors";
import * as express from "express";
import { ErrorRequestHandler } from "express";
import * as logger from "morgan";

import indexRouter from "./routes";
import HttpError from "./errors";

const app = express();

// register express middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// generic error handler
app.use(function (err: HttpError, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.json({
    status: err.status || 500,
  });
} as ErrorRequestHandler);

export default app;
