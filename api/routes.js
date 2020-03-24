const express = require("express");

const v1Routes = require("./v1/routes");

const router = app => {
  const apiRoutes = express.Router();

  // Mounting V1 routes on api
  apiRoutes.use("/v1", v1Routes);

  // Home API Route
  app.get("/", (req, res, next) => {
    res.json({ body: "Rabbit MQ application" });
  });

  // If no routes matches
  apiRoutes.use((req, res, next) => {
    if (!req.route) {
      const error = new Error("No route matched");
      error.status = 404;
      return next(error);
    }

    next();
  });

  app.use("/api", apiRoutes);
};
module.exports = router;
