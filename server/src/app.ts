// import express from 'express'
// import cors from 'cors'
// import logger from 'morgan'
// import bodyParser from 'body-parser'
// import indexRouter from './routes/index'
import mongoose from 'mongoose'
const dotenv = require('dotenv').config()

const { ApolloServer } = require('apollo-server')
// const { GraphQLServer } = require('graphql-yoga')

mongoose.connect(process.env.DB_URL || 'mongodb:localhost/test', { useNewUrlParser: true })
const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
db.on('error', (err) => console.log(err.message))
db.once('open', () => console.log('Connection Established.'))

db.on('disconnected', () => console.log('Connection Disconnected'))

process.on('SIGINT', function () {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
})

const typeDefs = require('./schema')

import resolvers from './resolvers'

// import QuestionAPI from './datasources/question'

// import { getStore } from './utils'

// creates a sequelize connection once. NOT for every request
// const store = {}
// const store = getStore()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // dataSources: () => ({
    //     questionAPI: new QuestionAPI({ store })
    // })
})

// const app = express()

// app.use(logger('dev'))
// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// app.use('/', indexRouter)
// app.use(process.env.API_BASE + 'login', Auth.login)
// app.use(process.env.API_BASE + 'user', userRouter)
// app.use(process.env.API_BASE + 'channel', channelRouter)

// console.log(process.env.NODE_ENV)

export default server