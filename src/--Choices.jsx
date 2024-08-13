import React from "react"


export default function Choices(props) {
    console.log("props", props)
    return (
        <>
            {props.choices.map((choice) =>
                <li onClick={props.handleClick} isClicked={props.isClicked} isCorrect={props.isCorrect} id={choice.id}>{choice.name}</li>)}
        </>
    )
}



