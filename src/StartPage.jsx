import React from "react"
import "./StartPage.css"

export default function StartPage(props) {


    return (
        <div className="StartPage">
            <div className="TopBlob"></div>

            <div className="StartPage_Info">
                <h1>Quizzical</h1>
                <p>a quiz game built in React</p>
                <button onClick={props.start}>Start Quiz</button>
            </div>

            <div className="BottomBlob"></div>
        </div>
    )
}