import React, { Component } from 'react'
import Question from '../../components/Question'
import { apiClient } from '../../util/apiClient'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { GET_QUESTIONS } from '../../util/queries'
import { Queue, Stack, IQuestion, IChoice } from '../../util/types'
import LoadingSpinner from '../../components/LoadingSpinner'
import Progress from '../../components/Progress/Progress'
// import Feedback from '../../components/Feedback/Feedback'
import End from '../../components/End/End'
import { shuffle } from '../../util/helper'

interface IState {
    current: any,
    score: number,
    total: number,
    count: number,
    cursor: string | null,
    status: string,
    loading: boolean
}
interface IProps {}

class Quiz extends Component<IProps, IState> {
    private _queue = new Queue<IQuestion>()
    private _missed = new Stack<IQuestion>()

    constructor(props: IProps) {
        super(props)

        this.state = {
            current: {},
            score: 0,
            total: 0,
            count: 0,
            cursor: '0',
            status: '',
            loading: true
        }

        this.handlerAnswerSelected = this.handlerAnswerSelected.bind(this)
	}

    componentDidMount() {
		this.fixStorageCorrupt()

        if (localStorage.getItem('_queue') === null || localStorage.getItem('state') === null ) {
            this.remotely()
        } else {
            this.locally()
        }
    }

    componentDidUpdate(prevProps: object, prevState: object) {
        // console.log('syncing...')
        localStorage.setItem('state', JSON.stringify(this.state))
        localStorage.setItem('_queue', JSON.stringify(this._queue))
        localStorage.setItem('_missed', JSON.stringify(this._missed))
	}

	fixStorageCorrupt() {
		if (localStorage.getItem('_corrupt') === 'true') {
			localStorage.clear()
		}
	}

    remotely() {
        // console.log('remotely')

        this.fetch()
    }

    locally() {
        // console.log('locally')

        // Restore Queue
        const queue = JSON.parse(localStorage.getItem('_queue') || '')._queue
        // if (this.state.cursor !== null && queue.length == 0 ) {
        //     this.setState({ cursor: null })
        //     this.remotely()
        // }
        this.queue(queue)
        // Restore State
        const state = JSON.parse(localStorage.getItem('state') || '')
        this.setState(state)
    }

    fetch() {
        console.log('fetching...@', this.state.cursor)

        if( this.state.cursor === null ) {
            this.setState({ loading: true, current: {} })
            setTimeout(() => this.setState({ loading: false }), 1000)

            // console.log('no more questions')
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
                    const questions = shuffle<IQuestion>(data.questions.questions)
                    this.mapQuestions(questions)

                    const cursor = data.questions.hasMore === true ? data.questions.cursor : null
                    this.setState({ cursor: cursor })
                })
                .catch((err) => {
                    this.setState({ current: {}, loading: true })
					console.log('Something went wrong...', err.message)
					localStorage.setItem('_corrupt', 'true')
                })
        }
    }

    mapQuestions(questions: Array<IQuestion>) {
        this.setState({
            count: this.state.count + questions.length
        })
        let reformatted: Array<IQuestion> = []
        questions.map((question) => {
            const newQ = {
                body: question.body,
                choices: question.choices
            }

            reformatted.push(newQ)
        })

        this.queue(reformatted)
        this.next()
        this.setState({loading: false})
        // console.log('donE')
    }

    // mapChoices(choices: any) {
    //     let formatted: any = {}
    //     choices.map((choice: any) => {
    //         formatted[choice.id] = {
    //             body: choice.body,
    //             correct: choice.correct
    //         }
    //     })
    //     return formatted
    // }

    queue(data: Array<IQuestion>) {
        this._queue = new Queue(data)
    }

    next() {
        // console.log(this._queue)
        if( this._queue.count ) {
            const dequeued = this._queue.dequeue()
            this.setState({
                current: dequeued,
                total: this.state.total + 1
            })

            // console.log(this.state.current)
            // console.log(this._queue)
        } else {
            this.fetch()
        }
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
            // this._queue.enqueue(this.state.current)
            this._queue.shuffle()
        }

        this.setState({ status: choice.correct })
        // console.log('choice is' + choice.correct)
        // Display Correct Answer
        // Activate Next Button
        // if (! this._queue.count) {
        //     // add delay for last question
        //     setTimeout(() => this.next(), 300)
        // } else {
        //     this.next()
        // }
        // this.next()
    }

    render() {
        const isEmpty = Object.entries(this.state.current).length === 0 && this.state.current.constructor === Object
        // const isEmpty = true

        const choices = isEmpty ? [] : shuffle<IChoice>(this.state.current.choices)

        if (this.state.loading) {
            return <LoadingSpinner />
        }

        //  && this.state.loading === false

        if ( this.state.cursor === null && isEmpty ) {
            return (
                <End
                    score={this.state.score}
                    total={this.state.count}
                />
            )
        }

        return (
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
                        <Question body={this.state.current.body} choices={choices} onAnswerSelected={this.handlerAnswerSelected} />
                    </div>
                </ReactCSSTransitionGroup>

                {/* <Feedback
                        status={this.state.status}
                    /> */}

                <Progress
                    score={this.state.score}
                    total={this.state.count}
                />
            </div>
        )
    }
}

export default Quiz
