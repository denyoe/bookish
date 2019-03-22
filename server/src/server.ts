import app from './app'

const PORT = process.env.PORT || 3000

// models.sequelize.sync().then(() => {
//     app.listen(PORT)
//     .then('error', onError)
//     .then('listening', onListening)
// });

app
.listen(PORT)
.then(({ url }) => console.log(`🚀 Server ready at ${url}`))

