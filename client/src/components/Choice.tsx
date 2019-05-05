import React, {Component} from 'react'

interface IState {}
interface IProps {
    question: string,
    body: any,
    handlerChoiceSelected: any
}

class Choice extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.handlerChoiceSelected = this.handlerChoiceSelected.bind(this)
    }

    // generateRandomNumber = (min: number, max: number) => {
    //     return Math.floor(Math.random() * (max - min + 1) + min)
    // }

    // componentDidMount() {}


    handlerChoiceSelected(e: any) {
        this.props.handlerChoiceSelected(e)
    }

    render() {
        const props = this.props

        const className = props.body.correct === 'true' ? 'radioCustomButtonSuccess' : 'radioCustomButton'

        return (
            <li className="choice-item icobutton">
                <input
                    type="radio"
                    className={className}
                    name={"radioGroup" + props.question}
                    id={props.body.body}
                    value={JSON.stringify(props.body)}
                    onChange={this.handlerChoiceSelected}
                />

                <label className="radioCustomLabel" htmlFor={props.body.body}>
                    {props.body.body}
                </label>
            </li>
        )
    }
}

export default Choice
