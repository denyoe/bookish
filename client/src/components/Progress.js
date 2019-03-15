import React from 'react'
import PropTypes from 'prop-types'

function Progress(props) {
    return (
        <div>
            Question <span>{props.score}</span>
        </div>
    )
}

Progress.propTypes = {
    score: PropTypes.number.isRequired
}

export default Progress