import React from "react"


export default function QuizQuestion(props) {

    //fix in the li!!!!!!
    console.log("p --full props", props)

    //can i move the working style out of the element ant into this section????????????????????????????

    //a giant if else where is selected on question is used, the choice is 
    //selected is used and the choice is correct is used

    //pass the state variable is submitted here as a prop?
    //if not submitted, set to blue on click

    //if submitted == correct gets green
    // selected and not correct gets red

    //options are
    //all are not selected and the selected index = blue??????????

    //all are selected and is correct = green

    //all are selected and is NOT corredt = reddish

    let bgStyle;
    if (!props.isQuizSubmitted) {
        props.choices.map((choice, i) => {
            console.log("sel", props.selectedIndex)
            console.log("choice index", i)
            if (props.selectedIndex === i) {
                bgStyle = { backgroundColor: "#D6DBF5" }
            }

        })


    }

    if (props.isQuizSubmitted) {
        console.log("ready to chedk answers...")
        //loop through all the choices...
        props.choices.map((choice, i) => {
            //  console.log("choice", choice.name)
            if (choice.name === props.correctAnswer) {
                bgStyle = { backgroundColor: "#94D7A2" }
            }
        })
        //if a choice name matches the correct anwer

        //color it green
        //find the correct index
        // const correctIndex = props.choices.findIndex((el) => el.name === props.correctAnswer)
        //console.log("ci", correctIndex)
        // props.choices.map((choice, i) => {
        //     // if (choice.name === props.correctAnswer) {
        //     //     console.log("that's correct")
        //     // } else {
        //     //     console.log("nope ")
        //set all correct anwers to green.....
        // console.log("post submit......")
        // props.choices.map((choice, i) => {
        //     console.log("choice", choice.name)
        //     if (choice[i].name === props.correctAnswer) {
        //         bgStyle = { backgroundColor: "#94D7A2" }
        //     }

        // })


        // console.log("choice", props.choices[props.selectedIndex].name === props.correctAnswer)

        // } 
        //how to reach incorrect anwer to do both colors? correct andwer

        //i think i need to map through for correct answers first

        //then check if selected answer does not match correct answer???

        //     if (props.choices[props.selectedIndex].name != props.correctAnswer && props.choices[props.selectedIndex] === props.selectedIndex) {
        //         bgStyle = { backgroundColor: "#F8BCBC", opacity: 0.5 }
        //     }
        // }

    }

    // const styles = {
    //     backgroundColor: props.selectedIndex === 0 ? "red" : ""
    // }

    // const choiceColor = {
    //     backgroundColor:
    // }

    return (
        <div className="Question">
            <p>{props.text}</p>
            <ul>
                {props.choices.map((choice, i) =>

                    //  props.selectedIndex === i ? 

                    <li style={props.selectedIndex === i ? bgStyle : null}
                        // <li style={bgStyle}
                        onClick={props.handleClick}>
                        {/* key={choice.id} */}
                        {/* isClicked={props.isClicked} */}
                        {/* isSelected={props.isSelected}> */}
                        {choice.name}</li>)}

            </ul>
            <hr />
        </div>
    )
}

// let bgColor;
// if(isSelected && isTrue || isTrue){
//     bgColor = "greed"
// }

// if( isSelected && !isTrue){
//     bgColor = "red"
// }