export function shuffle<T>(array: Array<T>): Array<T> {
    let currentIndex = array.length, tmp, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        tmp = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = tmp
    }

    return array
}

// function shuffleArray(array: IChoice[]) {
//     
// }