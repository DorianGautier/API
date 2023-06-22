const express = require("express");
const db = require("./app/models");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.mongoose.connect("mongodb://localhost:27017/test");

require("./app/routes/pilote.route")(app);
require("./app/routes/user.route")(app);
require("./app/routes/team.route")(app);
require("./app/routes/course.route")(app);
require("./app/routes/resultat.route")(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "F1 Stats API",
      version: "1.0.0",
      description:
        "Cette API vous permet de récupérer des informations sur les courses, les pilotes et les ecuries de F1",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            username: {
              type: "string",
            },
            password: {
              type: "string",
            },
          },
          required: ["name", "password"],
        },
        Team: {
          type: "object",
          properties: {
            name: { type: "string"},
            description: { type: "string"},
            teamlogo: { type: "string"},
            firstpilote: { type: "string"},
            secondpilote: { type: "string"},
            motormanufacturer: { type: "string"},
            teamprincipal: { type: "string"},
            teamowner: { type: "string"},
            constructorchampionships: { type: "string"},
            yearinf1: { type: "string"},
          },
        },
        Team: {
          type: "object",
          properties: {
            name: { type: "string"},
            description: { type: "string"},
            teamlogo: { type: "string"},
            firstpilote: { type: "string"},
            secondpilote: { type: "string"},
            motormanufacturer: { type: "string"},
            teamprincipal: { type: "string"},
            teamowner: { type: "string"},
            constructorchampionships: { type: "string"},
            yearinf1: { type: "string"},
          },
        },
          Course: {
            type: "object",
            properties: {
              country: { type: "string"},
              city: { type: "string"},
              circuit: { type: "string"},
              circuitimage: { type: "string"},
              countryflag: { type: "string"},
              last5winners: { type: "string"},
              date: { type: "date"},
            },
          },
          Pilote: {
            type: "object",
            properties: {
              firstname: { type: "string"},
              lastname: { type: "string"},
              age: { type: "number"},
              yearinf1: { type: "number"},
              wins: { type: "number"},
              podiums: { type: "number"},
              polepositions: { type: "number"},
              team: { type: "string"},
              teamlogo: { type: "string"},
              country: { type: "string"},
              image: { type: "string"},
              description: { type: "string"},
              active: { type: "boolean"},

            },
          },
          Resultat: {
            type: "object",
            properties: {
              circuit: { type: "string"},
              pilote1: { type: "string"},
              pilote1time: { type: "string"},
              pilote2: { type: "string"},
              pilote2time: { type: "string"},
              pilote3: { type: "string"},
              pilote3time: { type: "string"},
              pilote4: { type: "string"},
              pilote4time: { type: "string"},
              pilote5: { type: "string"},
              pilote5time: { type: "string"},
              pilote6: { type: "string"},
              pilote6time: { type: "string"},
              pilote7: { type: "string"},
              pilote7time: { type: "string"},
              pilote8: { type: "string"},
              pilote8time: { type: "string"},
              pilote9: { type: "string"},
              pilote9time: { type: "string"},
              pilote10: { type: "string"},
              pilote10time: { type: "string"},
              pilote11: { type: "string"},
              pilote11time: { type: "string"},
              pilote12: { type: "string"},
              pilote12time: { type: "string"},
              pilote13: { type: "string"},
              pilote13time: { type: "string"},
              pilote14: { type: "string"},
              pilote14time: { type: "string"},
              pilote15: { type: "string"},
              pilote15time: { type: "string"},
              pilote16: { type: "string"},
              pilote16time: { type: "string"},
              pilote17: { type: "string"},
              pilote17time: { type: "string"},
              pilote18: { type: "string"},
              pilote18time: { type: "string"},
              pilote19: { type: "string"},
              pilote19time: { type: "string"},
              pilote20: { type: "string"},
              pilote20time: { type: "string"},
            },
          },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ["./app/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


