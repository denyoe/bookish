import React from 'react'
import Choice from './Choice'
import { IQuestion, IChoice } from '../util/types'

// function shuffleArray(array: IChoice[]) {
//     console.log('shuffling array...')
//     let currentIndex = array.length, tmp, randomIndex

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex)
//         currentIndex -= 1

//         // And swap it with the current element.
//         tmp = array[currentIndex]
//         array[currentIndex] = array[randomIndex]
//         array[randomIndex] = tmp
//     }
    
//     return array
// }

type Props = {
    body: string,
    choices: any,
    onAnswerSelected: Function
}

const Question = ({ body, choices, onAnswerSelected }: Props) => {
    return (
        <div>
            <h3 className="question">{body}</h3>
            <div>
                <ul className="choice-list">
                    {
                        Object.keys(choices).map(idx => {
                            return <Choice key={idx} body={choices[idx]} question={body} handlerChoiceSelected={onAnswerSelected} />
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Question