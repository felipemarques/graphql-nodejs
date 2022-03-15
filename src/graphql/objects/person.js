import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export default new GraphQLObjectType({
  name: "",
  description: "",
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "Unique id",
        resolve: () => 2,
      },
      name: {
        type: GraphQLString,
        description: "Name",
        resolve: () => 'Felipe',
      },
    };
  },
});
