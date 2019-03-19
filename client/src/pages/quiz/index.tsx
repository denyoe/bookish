import React, { Component } from 'react'
import Question from '../../components/Question'
import { apiClient } from '../../util/apiClient'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { GET_QUESTIONS } from '../../util/queries'
import { Queue, Stack, IQuestion, IChoice } from '../../util/types'
import LoadingSpinner from '../../components/LoadingSpinner'
import Progress from '../../components/Progress/Progress'
// import { init } from '../../util/animations'

interface IState {
    // questions: IQuestion[],
    // queue: Queue<IQuestion>,
    // choices: any,
    current: any,
    score: number,
    total: number,
    count: number,
    cursor: string | null
}
interface IProps {}

class Quiz extends Component<IProps, IState> {
    private _queue = new Queue<IQuestion>()
    private _missed = new Stack<IQuestion>()

    constructor(props: IProps) {
        super(props)

        this.state = {            // queue: new Queue<IQuestion>(),
            current: {},
            score: 0,
            total: 0,
            count: 0,
            cursor: '0'
        }

        this.handlerAnswerSelected = this.handlerAnswerSelected.bind(this)
    }

    componentDidMount() {
        if (localStorage.getItem('_queue') === null || localStorage.getItem('state') === null ) {
            this.remotely()
        } else {
            this.locally()
        }
    }

    componentDidUpdate(prevProps: object, prevState: object) {
        console.log('syncing...')
        localStorage.setItem('state', JSON.stringify(this.state))
        localStorage.setItem('_queue', JSON.stringify(this._queue))
        localStorage.setItem('_missed', JSON.stringify(this._missed))
    }

    remotely() {
        console.log('remotely')

        this.fetch()
    }

    locally() {
        console.log('locally')
        // Restore Queue
        this.queue(JSON.parse(localStorage.getItem('_queue') || '')._queue)
        // Restore State
        const state = JSON.parse(localStorage.getItem('state') || '')
        this.setState(state)
    }

    fetch() {
        console.log('fetching...@', this.state.cursor)

        if( this.state.cursor === null ) {
            this.setState({ current: {} })
            console.log('no more questions')
            // no more questions at this time
        } else {
            apiClient
                .query({
                    query: GET_QUESTIONS,
                    variables: {
                        after: this.state.cursor
                    }
                })
                .then(({ data }) => {
                    this.mapQuestions(data.questions.questions)
                    this.setState({ cursor: data.questions.cursor })
                })
        }
    }

    mapQuestions(questions: Array<IQuestion>) {
        // console.log(data.questions.questions)
        this.setState({
            count: this.state.count + questions.length
        })
        let reformatted: Array<IQuestion> = []
        questions.map((question) => {
            const choices = this.mapChoices(question.choices)
            const newQ = {
                body: question.body,
                choices: choices
            }

            reformatted.push(newQ)
        })
        
        this.queue(reformatted)
        this.next()
        
        console.log('donE')
    }

    queue(data: Array<IQuestion>) {
        this._queue = new Queue(data)
    }

    next() {
        console.log(this._queue)
        if( this._queue.count ) {
            const dequeued = this._queue.dequeue()
            this.setState({
                current: dequeued,
                total: this.state.total + 1
            })

            console.log(this.state.current)
            console.log(this._queue)
        } else {
            this.fetch()
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
        
        // setTimeout(() => this.next(), 300)
        this.eval(choice)
        this.next()
    }

    eval(choice: any) {
        if ( choice.correct == 'true' ) {
            this.setState({
                score: this.state.score + 1
            })
        } else {
            this._missed.push(this.state.current)
        }
        // Display Correct Answer
        // Activate Next Button
    }

    render() {
        const isEmpty = Object.entries(this.state.current).length === 0 && this.state.current.constructor === Object
        // const isEmpty = true

        return isEmpty ? (
            <LoadingSpinner />
        ) : (
                <div>
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

                    <Progress
                        score={this.state.score}
                        total={this.state.count}
                    />
                </div>
        )
    }
}

export default Quiz