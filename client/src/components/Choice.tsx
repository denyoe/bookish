import React from 'react'

function Choice(props: any) {
    return (
        <li>
            <input 
                type="radio"
                name={"radioGroup" + props.question}
                id={props.body.body}
                value={JSON.stringify(props.body)}
                onChange={ props.handlerChoiceSelected }
            />
            <label className="">
                { props.body.body }
            </label>
        </li>
    )
}

export default Choice