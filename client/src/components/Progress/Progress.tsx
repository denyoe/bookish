import React from 'react'
import './Progress.css'

interface IProps {
	score: number,
	missed: number,
    total: number,
}

const Progress = ({ score, missed, total }: IProps) => {
    const progress = (score / total) * 100

    const style = {
        width: progress + '%'
	}

	const red = {
		color: '#F00'
	}

    return (
        <div className="progress">
			{score} <span style={red}>of {missed + score}</span> / {total}
            <div className="meter clear animate">
                <span style={style}><span></span></span>
            </div>
        </div>
    )
}

export default Progress
