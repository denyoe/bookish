## Technical test - ContentSquare

### Description

...

### Instructions

#### Server (NodeJS)
1. Go to server directory: `cd server`
2. Duplicate the `.env.example` file and rename it to `.env`
3. Install dependencies with: `yarn install`
4. Update (MySQL) database details in `config/config.json`
5. Run Migrations `node_modules/.bin/sequelize db:migrate`
6. Run Seeders `knex seed:run --env development` (Default Password: `password`)
7. Start Server with `yarn run dev`

Server API URL: `http://localhost:3000/`

You can Run the tests with: `yarn test`


#### Misc
1. Create Model and Migration: `node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string`

2. Rollback all migration: `node_modules/.bin/sequelize db:migrate:undo` or individual migration `node_modules/.bin/sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-questions.js`

3. Running seeds: `node_modules/.bin/sequelize db:seed:all` or `node_modules/.bin/sequelize db:seed:undo`

4. Creating Seeders: `node_modules/.bin/sequelize seed:generate --name demo-questions`

5. Creating migrations: `sequelize migration:generate --name associate-product-tag`