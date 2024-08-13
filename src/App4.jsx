// import React from "react"
import React from "react";
import dataQuiz from "./dataQuiz"
// import Choices from "./Choices"
import { nanoid } from "nanoid";
import QuizQuestion from "./QuizQuestion"
import he from "he"
import { FadeLoader } from "react-spinners";
import "./AAA.css"


// spinner css
const spinnerCss = {
    margin: '50% auto',
};



// get it to log id of li clicked on

//got to be in the data!!!!!!!!!

//0. pas 2 args into handle click, the array? and the name, map the array to find item!!!!!!!!!!!!!!!!!!!!!!

//1. dont set quiz until data is back 

//2. the spinners on load: https://www.npmjs.com/package/react-spinners

//3. make lis divs??????

//4. ignore shuffle array, decode thing, for now

//5. try to set up spinner...

export default function App() {

    let [loading, setLoading] = React.useState(true);


    const [quiz, setQuiz] = React.useState([])
 

    React.useEffect(() => {
        const url = "https://opentdb.com/api.php?amount=5&type=multiple"
        async function getQuiz() {
            const res = await fetch(url)
            const data = await res.json()
            //now i have to edit data to my specs here
            //maybe edit data, then set state???
            //full array here? then shuffle on state?
            const quizDataArray = await data.results.map((quizQuestion) => {
                return {
                    question: quizQuestion.question,
                    id: nanoid(),
                    correct: quizQuestion.correct_answer,
                    // incorrectAnswers: quizQuestion.incorrect_answers,
                    // correctAnswer: {
                    //     name: quizQuestion.correct_answer,
                    //     id: nanoid(),
                    //     isClicked: false,
                    //     isCorrect: true
                    // },
                    fullChoices: fullArray(quizQuestion.incorrect_answers, quizQuestion.correct_answer)
                }
            })
            setQuiz(quizDataArray.map((question) => {
                return {
                    ...question,
                    shuffleChoices: shuffle(question.fullChoices),
                    isSelected: false

                }
            }))
            // }))
            ///set state of choices?????
            // setChoices(quiz.fullChoices)
            // console.log(choices)
            // console.log(quizDataArray)
        }
        setTimeout(() => {
            getQuiz()
            setLoading(false)
        }, 6000)


        return () => {
            console.log("what needs to be cleaned up?")
        }
    }, [])
    console.log("state", quiz)

    function setIdOnChoices(arr) {
        return arr.map((el) => {
            return {

                name: el,
                id: nanoid(),
                isClicked: false,
                isCorrect: false
            }
        })

    }


    function fullArray(a1, a2) {
        const answers = []
        a1.map((el) => {
            answers.push({
                name: el,
                id: nanoid(),
                isClicked: false,
                isCorrect: false
            })
        })
        answers.push({
            name: a2,
            id: nanoid(),
            isClicked: false,
            isCorrect: true
        })

        return answers
    }


    //modified from w3schools.com 
    function fisherYatesArrayShuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let k = arr[i];
            arr[i] = arr[j];
            arr[j] = k;
        }
        return arr
    }

    //simple sort
    //this one is easier to understand, tested and works as welll as fisheryates one
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }


    function handleClick(question, target) {
        // const clickedChoice = question.fullChoices.find((choice) => {
        //     return choice.name === target
        // })
        // console.log("clickecChoice ID", clickedChoice.id)
        console.log("full question", question)
        console.log("target", target)



        //this is useless but does work

        const clickedOn = question.shuffleChoices.find((el) => el.name === target)

        setQuiz(prevQuiz => prevQuiz.map((quest) => {

            
            // console.log("full on map", quest.fullChoices)
            //find item clicked on... using target and map of the choice
            // const item = quest.fullChoices.map((el) => el.name === target)
            // console.log("item,", item)
            return quest.id === question.id ? { ...quest, isSelected: !quest.isSelected } : quest

        }))

        ///how do i find the choice that's clicked on in STATE????
        // console.log("co", clickedOn)

    }



    //     return prevSquares.map((square) => {
    //         return square.id === id ? {...square, on: !square.on} : square
    //     })
    // })




    //map the questions to the return.,,,,

    const quizElements = quiz.map((question, index) => {
        // console.log("question index", index)
        return <QuizQuestion
            key={question.id}
            text={question.question}
            choices={question.shuffleChoices}
            isSelected={question.isSelected}
            // // what needs to be passed in here??????????
            ///no idea????????
            handleClick={(e) => {
                //e.stopPropagation()
                ///??? what do I want to get here...????????
                //handleClick(e.target.textContent)
                // handleClick(question.fullChoices.findIndex((el) => el.isCorrect === false))
                handleClick(question, e.target.textContent)
            }}
            // onClick={e => {
            //     e.stopPropagation();
            //     onChangeColor();
            //   }}
            correctAnswer={question.fullChoices}
        // isSelected={question.isSelected}
        // isClicked={question.fullChoices[index].isClicked}

        />

    })


    // const quizChoices = quiz.map((choices, index) => {
    //     console.log("choices", choices.fullChoices[index].name)
    //     console.log("id", choices.fullChoices[index].id)
    //     return <Choices
    //         // handleClick={() => choices.fullChoices.handleClick(id)}
    //         // isClicked={choices.fullChoices[i].isClicked}
    //         // isCorrect={choices.fullChoices.isCorrect}
    //         id={choices.fullChoices[index].id}
    //         name={choices.fullChoices[index].name}
    //     />
    // })
    // {dice.map((die) => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)}


    return (
        <>
            <h1>hello</h1>

            {/* spinner component from https://www.npmjs.com/package/react-spinners */}
            {/* {loading && <FadeLoader
                loading={loading}
                size={10}
                height={20}
                cssOverride={spinnerCss}
                color={'#4D5B9E'}
            />} */}

            {quizElements}
            {/* {quizChoices} */}
        </>
    )
}

