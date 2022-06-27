const express = require("express");
const swaggerUi = require("swagger-ui-express");

swaggerDocument = require("../../swagger.json");

const apiRouter = express.Router();

apiRouter.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = apiRouter;
