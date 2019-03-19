import React from 'react'
import './Progress.css'

type Props = {
    score: number,
    total: number,
}

const Progress = ({ score, total }: Props) => {
    // const progress = 25
    const progress = (score/total) * 100

    // console.log(progress, score, total)

    const style = {
        width: progress + '%'
    }

    return (
        <div>
            {score} / {total}
            <div className="meter clear animate">
                <span style={style}><span></span></span>
            </div>
        </div>
    )
}

export default Progress