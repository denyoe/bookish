import React, { Component } from 'react'
// import Questions from '../../components/Questions'
import Question from '../../components/Question'
import { apiClient } from '../../util/apiClient'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { GET_QUESTIONS } from '../../util/queries'
import { Queue, IQuestion, IChoice } from '../../util/types'
import LoadingSpinner from '../../components/LoadingSpinner';

interface IState {
    // questions: IQuestion[],
    // questionId: number,
    // queue: Queue<IQuestion>,
    // choices: any,
    current: any,
    score: number,
    total: number,
}

interface IProps {}

class Quiz extends Component<IProps, IState> {
    private _queue = new Queue<IQuestion>()

    constructor(props: IProps) {
        super(props)

        this.state = {
            // questions: [],
            // questionId: 1,
            // queue: new Queue<IQuestion>(),
            current: {},
            // choices: {},
            score: 0,
            total: 0,
        }

        this.handlerAnswerSelected = this.handlerAnswerSelected.bind(this)
    }

    componentDidMount() {
        apiClient
        .query({
            query: GET_QUESTIONS
        })
        .then(({ data }) => {
            this.mapQuestions(data.questions.questions)
        })
    }

    mapQuestions(questions: Array<IQuestion>) {
        // console.log(data.questions.questions)
        let reformatted: Array<IQuestion> = []
        questions.map((question) => {
            const choices = this.mapChoices(question.choices)
            const newQ = {
                body: question.body,
                choices: choices
            }

            reformatted.push(newQ)
        })
        this._queue = new Queue(reformatted)
        this.next()
        
        console.log('donE')
    }

    next() {
        if( this._queue.count ) {
            const dequeued = this._queue.dequeue()
            this.setState({
                current: dequeued,
                total: this.state.total + 1
            })

            console.log(this.state.current)
            console.log(this._queue)
        } else {
            this.setState({
                current: {}
            })
            console.log('no more questions')
        }
    }

    mapChoices(choices: any) {
        let formatted: any = {}
        choices.map((choice: any) => {
            formatted[choice.id] = {
                body: choice.body,
                correct: choice.correct
            }
        })
        return formatted
    }

    handlerAnswerSelected(e: any) {
        const choice = JSON.parse(e.target.value)
        this.eval(choice)

        setTimeout(() => this.next(), 300)
    }

    eval(choice: any) {
        if ( choice.correct == 'true' ) {
            this.setState({
                score: this.state.score + 1
            })
        }
    }

    render() {
        const isEmpty = Object.entries(this.state.current).length === 0 && this.state.current.constructor === Object
        // const isEmpty = true

        return isEmpty ? (
            <LoadingSpinner />
        ) : (
                <ReactCSSTransitionGroup
                    className="container"
                    component="div"
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    transitionAppearTimeout={500}
                >
                    <div key={this.state.current.body}>
                        <Question body={this.state.current.body} choices={this.state.current.choices} onAnswerSelected={this.handlerAnswerSelected} />
                    </div>
                </ReactCSSTransitionGroup>
        )
    }
}

export default Quiz