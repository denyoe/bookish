"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var models = require('./db/models');
var PORT = process.env.PORT || 3000;
// models.sequelize.sync().then(() => {
//     app.listen(PORT)
//     .then('error', onError)
//     .then('listening', onListening)
// });
app_1.default
    .listen(PORT)
    .then(function (_a) {
    var url = _a.url;
    return console.log("\uD83D\uDE80 Server ready at " + url);
});
