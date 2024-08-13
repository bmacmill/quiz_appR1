import React from "react"
import "./QuizQuestions.css"



export default function QuizQuestion(props) {

    let bgStyle;
    if (!props.isQuizSubmitted) {
        props.choices.map((choice, i) => {
            if (choice.name === props.correctAnswer) {
                bgStyle = { backgroundColor: "#D6DBF5" }
            }
        })
    }

    const correctIndex = props.choices.findIndex((el) => el.name === props.correctAnswer)

    if (props.isQuizSubmitted) {
        //mark correct answers

        props.choices.map((choice, i) => {
            if (i === correctIndex) {
                bgStyle = { backgroundColor: "#94D7A2" }
            } else {
                return
            }
        })
    }
    //maybe i don't need to map???
    if (props.isQuizSubmitted) {
        if (props.choices[props.selectedIndex].name !== props.correctAnswer) {
            bgStyle = { backgroundColor: "#F8BCBC", opacity: 0.9 }
        }

    }


    return (
        <div className="Question">
            <div className="TopBlob"></div>
            <p>{props.text}</p>
            <ul>
                {props.choices.map((choice, i) =>

                    //  props.selectedIndex === i ? 

                    <li style={props.selectedIndex === i ? bgStyle : null}
                        key={choice.id}
                        onClick={props.handleClick}>

                        {/* isClicked={props.isClicked} */}
                        {/* isSelected={props.isSelected}> */}
                        {choice.name}</li> )}
                    
            </ul>
            <div className="BottomBlob"></div>
        </div>
    )
}



