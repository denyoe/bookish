// import SQL from 'sequelize'
// const questions = require('../models/question')
// const choices = require('../models/choice')

const paginateResults = ({
    after: cursor,
    pageSize = 20,
    results,
    // can pass in a function to calculate an item's cursor
    getCursor = (item) => null,
}) => {
    if (pageSize < 1) return [];

    if (! cursor) return results.slice(0, pageSize);

    const cursorIndex = results.findIndex(item => {
        // if an item has a `cursor` on it, use that, otherwise try to generate one
        let itemCursor = item.cursor ? item.cursor : getCursor(item)

        // if there's still not a cursor, return false by default
        return itemCursor ? cursor === itemCursor : false
    })

    return cursorIndex >= 0
        ? cursorIndex === results.length - 1 // don't let us overflow
            ? []
            : results.slice(
                cursorIndex + 1,
                Math.min(results.length, cursorIndex + 1 + pageSize),
            )
        : results.slice(0, pageSize);

    // results.slice(cursorIndex >= 0 ? cursorIndex + 1 : 0, cursorIndex >= 0);
}

// const getStore = () => {
//     return { }
// }

export {
    paginateResults
}
    