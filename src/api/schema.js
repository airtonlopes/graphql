const resolvers = require("./resolver");
const { makeExecutableSchema } = require("graphql-tools");

const userAttributes = `
		id: ID
		name: String!
		email: String!
		password: String!
`;

const typeDefs = `
	type User {
		${userAttributes}
	}

	type Query {
		getUser(id: ID!): User
		getUsers: [User]
	}

	input UserInput {
		${userAttributes}
	}

	type Mutation {
		createUser(input: UserInput): User
	}
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
