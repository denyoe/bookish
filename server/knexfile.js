// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'literate',
      user: 'root',
      password: '',
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true,
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './test.db'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'swap-chat',
      user:     'root',
      password: '',
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true,
  }

};
