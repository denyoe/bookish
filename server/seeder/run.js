const path = require('path')
const fs = require('fs')
const JSONStream = require('JSONStream')
const mongoose = require('mongoose')
const es = require('event-stream')
const Question = require('../src/db/models/question')

const filePath = path.join(__dirname, 'questions.json')

const stream = fs.createReadStream(filePath, {
    flags: 'r',
    encoding: 'utf-8'
})

mongoose.connect('mongodb://localhost:27017/bookish', { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (err) => console.log(err.message))

db.once('open', () => {
    stream
        .pipe(JSONStream.parse('*'))
        .pipe(es.mapSync((questions) => {
            questions.map((question, index) => {
                // Create if not exists
                Question.updateOne({
                    body: question.body
                }, {
                    choices: question.choices
                }, { upsert: true }, (err, raw) => {})

                console.log(++index)
            })
        }))
    
})

db.on('disconnected', () => console.log('Connection Disconnected'))

process.on('SIGINT', function () {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
})
