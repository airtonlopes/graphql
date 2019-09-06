// Update with your config settings.
const Db = require("../.env");

module.exports = {
	development: {
		client: Db.type,
		connection: {
			host: Db.host,
			user: Db.user,
			password: Db.pass,
			database: Db.base
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: "knex_migrations"
		}
	},

	staging: {
		client: "postgres",
		connection: {
			database: "graphql",
			user: "postgres",
			password: "dev123"
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: "knex_migrations"
		}
	},

	production: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user: "username",
			password: "password"
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: "knex_migrations"
		}
	}
};
