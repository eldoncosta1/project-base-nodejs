module.exports =
  [
    {
      "name": "default",
      "type": "postgres",
      "host": process.env.POSTGRES_HOST,
      "port": process.env.POSTGRES_PORT,
      "username": process.env.POSTGRES_USERNAME,
      "password": process.env.POSTGRES_PASSWORD,
      "database": process.env.POSTGRES_DB,
      "entities": [
        "./src/modules/**/infra/typeorm/entities/*.ts"
      ],
      "migrations": [
        "./src/shared/infra/typeorm/migrations/*.ts"
      ],
      "cli": {
        "migrationsDir": "./src/shared/infra/typeorm/migrations"
      }
    },
  ]
