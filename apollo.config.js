module.exports = {
  client: {
    service: {
      name: 'client',
      localSchemaFile: './schema.graphql',
    },
    // tagName: 'gql',
    tagName: 'omitGqlTagsTheyAreUnderGraphqlCodeGeneratorControl',
  },
};
