const parse = require("pg-connection-string").parse;

const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",

    connection: {
      host: "127.0.0.1",

      port: 5432,

      database: 'postgres',

      user: 'postgres',

      password: '123',

      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },

    options: {
      ssl: env.bool("DATABASE_SSL", false),
    },

    debug: false,
  },
});
