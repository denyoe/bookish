import app from './app'
const models = require('../models')

const PORT = process.env.PORT || 4000

models.sequelize.sync().then(() => {
    app.listen(PORT)
    .then('error', onError)
    .then('listening', onListening)
});

const onError = (error) => console.log(error)
const onListening = ({ url }) => console.log(console.log(`🚀 Server ready at ${url}`))