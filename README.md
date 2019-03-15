## Bookish - Quiz

### Description

Everyone can appreciate great literature. There's something about that opening line that can just hook you in; and famous opening lines, there have been a few over the centuries. Here's your shot at proving how well you know them! :)

---

### Instructions

#### Server (NodeJS)
1. Go to server directory: `cd server`
2. Duplicate the `.env.example` file and rename it to `.env`
3. Install dependencies with: `yarn install`
4. Update (MySQL) database details in `config/config.json`
5. Run Migrations `node_modules/.bin/sequelize db:migrate`
6. Run Seeders `knex seed:run --env development` (Default Password: `password`)
7. Start Server with `yarn run dev`

Server API URL: `http://localhost:4000/`

You can Run the tests with: `yarn test`

##### Sample Query
```
query {
  questions(pageSize: 3) {
    questions {
      id
      body
    	choices {
        body,
        correct
      }
    },
  }
}
```

---

#### Client (ReactJS)
1. Ensure the NodeJS server is running on port ***4000***
2. Go to the client directory: `cd client`
3. Install depencencies with: `yarn install`
4. Run the App with: `yarn start`

The application should now be accessible at `http://localhost:3000/`