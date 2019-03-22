"use strict";
// import SQL from 'sequelize'
// const questions = require('../models/question')
// const choices = require('../models/choice')
Object.defineProperty(exports, "__esModule", { value: true });
var paginateResults = function (_a) {
    var cursor = _a.after, _b = _a.pageSize, pageSize = _b === void 0 ? 20 : _b, results = _a.results, 
    // can pass in a function to calculate an item's cursor
    _c = _a.getCursor, 
    // can pass in a function to calculate an item's cursor
    getCursor = _c === void 0 ? function (item) { return null; } : _c;
    if (pageSize < 1)
        return [];
    if (!cursor)
        return results.slice(0, pageSize);
    var cursorIndex = results.findIndex(function (item) {
        // if an item has a `cursor` on it, use that, otherwise try to generate one
        var itemCursor = item.cursor ? item.cursor : getCursor(item);
        // if there's still not a cursor, return false by default
        return itemCursor ? parseInt(cursor) === itemCursor : false;
    });
    // console.log(cursorIndex, 'cursorIndex', cursor)
    return cursorIndex >= 0
        ? cursorIndex === results.length - 1 // don't let us overflow
            ? []
            : results.slice(cursorIndex + 1, Math.min(results.length, cursorIndex + 1 + pageSize))
        : results.slice(0, pageSize);
    // results.slice(cursorIndex >= 0 ? cursorIndex + 1 : 0, cursorIndex >= 0);
};
exports.paginateResults = paginateResults;
