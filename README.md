## Bookish - Quiz

### Description

Everyone can appreciate great literature. There's something about that opening line that can just hook you in; and famous opening lines, there have been a few over the centuries. Here's your shot at proving how well you know them! :)

---

### Instructions

#### Server (NodeJS)
1. Go to server directory: `cd server`
2. Duplicate the `.env.example` file and rename it to `.env`
3. Install dependencies with: `yarn install`
6. Run Seeder `node ./seeder/run.js`
7. Start Server with `yarn run prod`

Server API URL: `http://localhost:4000/`

You can Run the tests with: `yarn test`

##### Sample Query
```
query {
  questions(pageSize: 2, after: "0") {
    hasMore
    cursor
    questions {
      id
      body
      choices {
        id
        body,
        correct
      }
    }
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