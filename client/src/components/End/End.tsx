import React from 'react'
import './End.css'

interface IProps {
    score: number,
    total: number
}

const clean = () => {
    localStorage.clear()
    location.reload()
}

const End = ({score, total}: IProps) => {
    return (
        <div className="end">
            <span className="stats">
                <ul>
                    <li>Score: <strong>{score}</strong></li>
                    <li>Total Number of Questions: <strong>{total}</strong></li>
                </ul>
            </span>
            <h1>bookish.</h1>
            <p>
                Hot Damn! Sadly, you have reached the end of this Quiz.
            </p>
            
            <p>
                But fear not! I'm hard at work crafting new questions 
                which should be available anytime now.
            </p>

            <p>
                You can reach me through <a href="https://twitter.com/marcusekon">twitter</a> or <a href="https://www.linkedin.com/in/marcek/">LinkedIn</a> if you have any suggestions for improving this Quiz; or just to say Hi.
            </p>

            <p>
                In the meantime, if you wish to restart the Quiz, click <a href="#" onClick={clean}>here</a>.
            </p>

        </div>
    )
}

export default End