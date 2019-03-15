import React, { Component } from 'react'
import Question from './Question'
import PropTypes from 'prop-types'

class Questions extends Component {
    render() {
        return (
            <div>
                {this.props.questions.map((question, index) => {
                    return <Question key={index} body={question.body} choices={question.choices} onAnswerSelected={this.props.onAnswerSelected} />
                })}
            </div>
        )
    }
}

Questions.propTypes = {
    questions: PropTypes.array.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
}

export default Questions