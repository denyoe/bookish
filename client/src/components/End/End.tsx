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

const socialWindow = (url: string) => {
    const width = 570
    const left = (screen.width - width) / 2
    const top = (screen.height - width) / 2
    const params = "menubar=no,toolbar=no,status=no,width=" + width + ",height=" + width + ",top=" + top + ",left=" + left

    window.open(url, "NewWindow", params)
}

const End = ({score, total}: IProps) => {
    const url = 'https%3A%2F%2Fbookish.bleek.io%2F'
    const text = 'Check+out+this+cool+Literature+Openings+Quiz+I+just+played.'

    const linkedin = 'https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=Bookish&summary=' + text + '&source=bookish'
    const facebook = 'https://www.facebook.com/sharer.php?u=' + url
    const twitter = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + text + '&hashtags=literature,books,quiz'

    return (
        <div className="end">
            <span className="stats">
                <ul>
                    <li>Score: <strong>{score}</strong></li>
                    <li>Total Number of Questions: <strong>{total}</strong></li>
                </ul>
            </span>

            <div>
                <h1>bookish.</h1>
                    <p>
                        Hot Damn! Sadly, you have reached the end of this Quiz.
                    </p>

                    <p>
                        But fear not! I'm hard at work crafting new questions
                        which should be available anytime now.
                    </p>

                    <p>
					You can reach me through <a target="_" href="https://twitter.com/marcusekon">twitter</a>, <a target="_" href="https://www.linkedin.com/in/marcek/">LinkedIn</a>, or <a target="_" href="https://www.instagram.com/marcusekon/">instagram</a> if you have any suggestions for improving this Quiz; or just to say Hi.
                    </p>

                    <p>
                        In the meantime, if you wish to restart the Quiz, click <a href="#" onClick={clean}>here</a>.
                    </p>
            </div>

            <div className="social">
                <span>
                    <a target="_" onClick={() => socialWindow(facebook)} href={facebook}><i className="fab fa-facebook-f"></i></a>
                </span>

                <span>
                    <a target="_" onClick={() => socialWindow(twitter)} href={twitter}><i className="fab fa-twitter"></i></a>
                </span>

                <span>
                    <a target="_" onClick={() => socialWindow(linkedin)} href={linkedin}><i className="fab fa-linkedin"></i></a>
                </span>
            </div>

        </div>
    )
}

export default End
