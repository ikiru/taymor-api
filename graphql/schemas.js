import { GraphQLSchema } from "graphql";
import QueryRoot from "./queries.js";
import MutationRoot from "./mutations.js";

// const {
//   UnassignedDeviceInput,
//   ContactInput,
//   DeviceInput
// } = require("./graphql/inputs.js");

const schema = async (headers) => {
  return new GraphQLSchema({
    // types: [UnassignedDeviceInput, ContactInput, DeviceInput],
    query: await QueryRoot(headers),
    mutation: await MutationRoot(headers)
  });
}

export default schema