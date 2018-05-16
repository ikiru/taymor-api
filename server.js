import express from "express";
import bodyParser from "body-parser";
import graphqlHTTP from "express-graphql";

import schema from "./graphql/schemas"

var app = express();

app.use(bodyParser.json());

// Health check for AWS
// NOTE: makes this smarter
app.use("/graphql/test", function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type, secret, token"
  );

  res.sendStatus(200);
});

// // The GraphQL endpoint
app.use(
  "/graphql",
  (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, content-type, secret, token"
    );

    if (req.method === "OPTIONS") {
      res.sendStatus(200);
    } else {
      next();
    }
  },
  graphqlHTTP( async request => ({
    schema: await schema(request.headers),
    graphiql: false
  }))
);

// GraphiQL, a visual editor for queries
app.use(
  "/graphiql",
  (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, content-type, secret, token"
    );

    if (req.method === "OPTIONS") {
      res.sendStatus(200);
    } else {
      next();
    }
  },
  graphqlHTTP( async request => ({
    schema: await schema(request.headers),
    graphiql: true
  }))
);

app.listen(9005, () => {
  console.log(
    "Running a GraphQL API server at localhost:9005/graphql. \nUse localhost:9005/graphiql to run queries"
  );
});
