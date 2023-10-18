const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "mfe1",

  exposes: {
    "./component1": "./src/client/main.ts",
    "./component2": "./src/client/main.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
      includeSecondaries: false,
    }), 
  },
  //skip: ["@fastify/cors", "@fastify/static", "fastify", '@fastify/cors/benchmark'],
});
