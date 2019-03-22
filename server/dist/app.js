"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express'
// import cors from 'cors'
// import logger from 'morgan'
// import bodyParser from 'body-parser'
// import indexRouter from './routes/index'
var dotenv = require('dotenv').config();
var ApolloServer = require('apollo-server').ApolloServer;
// const { GraphQLServer } = require('graphql-yoga')
var typeDefs = require('./schema');
var resolvers_1 = __importDefault(require("./resolvers"));
// import QuestionAPI from './datasources/question'
// import { getStore } from './utils'
// creates a sequelize connection once. NOT for every request
// const store = {}
// const store = getStore()
var server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers_1.default,
});
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
exports.default = server;
