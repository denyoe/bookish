import React from 'react'
import Choice from './Choice'
import { IQuestion, IChoice } from '../util/types'

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