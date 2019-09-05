const db = require("../config/database");

module.exports = {
  Query: {
    async getUser(_, { id }) {
      return await db("users")
        .where("id", id)
        .first();
    },

    async getUsers(/*_, { offset, limit}*/) {
      return await db("users");
    },

    Mutation: {
      async createUser(_, { input }) {
        const result = await db("users").insert({
          name: input.name,
          email: input.email,
          password: input.password
        });

        console.log(result);

        const id = result[0].id;
        return await db("users")
          .where("id", id)
          .first();
      }
    }
  }
};
