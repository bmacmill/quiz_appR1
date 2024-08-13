
import React from "react";
import QuizQuestion from "./QuizQuestion"
import StartPage from "./StartPage"
import { FadeLoader } from "react-spinners";
import he from "he"
import "./AAA.css"
import "./App.css"
import { nanoid } from "nanoid";

//the spinner thing css, really just copied docs and put here
//not able to get to work properly
const spinnerCss = {
    margin: '50% auto',
};

export default function App() {

    //setting quiz db
    const [quiz, setQuiz] = React.useState([])

    //all questions asnswerd -- this should enable the submit button
    const [allAnswered, setAllAnswered] = React.useState(false)

    //setting start page
    const [startPage, setStartPage] = React.useState(true)

    //score of correct answers
    const [score, setScore] = React.useState(0)

    //display score afer submitted
    const [submit, setSubmit] = React.useState(false)

    //spinner loader--ca't get to work properly removed
    const [loading, setLoading] = React.useState(false)

    //can't get this to work
    const [reloadQuiz, setReloadQuiz] = React.useState(false)


    React.useEffect(() => {
        const url = "https://opentdb.com/api.php?amount=5&type=multiple"
        async function getQuiz() {
            const res = await fetch(url)
            const data = await res.json()
            const quizDataArray = await data.results.map((quizQuestion) => {
                return {
                    question: he.decode(quizQuestion.question),
                    id: nanoid(),
                    correct: he.decode(quizQuestion.correct_answer),
                    fullChoices: fullArray(quizQuestion.incorrect_answers, quizQuestion.correct_answer),
                    selectedAnswer: '',
                    isSelected: false,
                    selectedIndex: null
                }
            })
            setQuiz(quizDataArray.map((question) => {
                return {
                    ...question,
                    shuffleChoices: shuffle(question.fullChoices)
                }
            }))
        }
        setTimeout(() => {
            getQuiz()
        }, 6000)

        console.log(quiz)
        return () => {
            console.log("what needs to be cleaned up?")
        }
    }, [])

//^^have it set on load, but not sure what correct dependency should be or how to implement??

    function fullArray(array1, str) {
        const answers = []
        array1.map((el) => {
            answers.push({
                name: he.decode(el),
                id: nanoid(),
                isClicked: false,
                isCorrect: false
            })
        })
        answers.push({
            name: he.decode(str),
            id: nanoid(),
            isClicked: false,
            isCorrect: true
        })

        return answers
    }


    //simple sort
    //this one is easier to understand, tested and works as welll as fisheryates one
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }


    function handleClick(e, choices, index, id) {

        const idx = choices.findIndex((choice) => choice.name === e.target.textContent)
        //set selected asnwer on object
        setQuiz(prevQuiz => prevQuiz.map((question, i) => {

            return question.id == id ? {
                ...question,
                isSelected: true,
                selectedIndex: idx,
                selectedAnswer: e.target.textContent
            } : question
        }))

    }

    //a use effect that checks if all the quesitons have been asnwered, sets that state to true.
    React.useEffect(() => {
        const allSelected = quiz.filter((el) => {
            return el.isSelected === true
        })
        if (allSelected.length > 4) {
            setAllAnswered(prevAns => !prevAns)
        }
    }, [quiz])


    //another use effect to check the score...

    React.useEffect(() => {
        //map through quiz, see if answer selected is correct?
        //increment score state if it is...
        const ansArray = quiz.filter((question) => {
            return question.selectedAnswer === question.correct ? true : false
        })
        const finalScore = ansArray.length
        setScore(finalScore)
    }, [quiz])


    //a use effect to style the choices after submit...

    React.useEffect(() => {
        if (allAnswered === true) {

            ///find the correct choice

            ///set color on it to green
        }
    }, [quiz])

    //map the questions to the return.,,,,

    const quizElements = quiz.map((question, i) => {
        // console.log("question index", index)
        return <QuizQuestion
            key={question.id}
            text={question.question}
            choices={question.shuffleChoices}
            isQuizSubmitted={submit}
            correctAnswer={question.correct}
            isSelected={question.isSelected}
            //questionIndex={}
            selectedIndex={question.selectedIndex}
            //  isClicked={question.shuffleChoices.isClicked}
            handleClick={(e) => handleClick(e, question.shuffleChoices, i, question.id)}
        //correctAnswer={question.fullChoices}

        />

    })

    function checkForScore() {
        setSubmit(true)

    }


    function start() {
        setStartPage(false)
        setReloadQuiz(prevLoad => !prevLoad)
        console.log("this should reload new questions if it worked properly")

    }

    return (
        <>
            {startPage ? <StartPage start={start} />


                :
                (<div className="QuizBoard">
                    {quizElements}


                    {!submit && <button onClick={checkForScore} disabled={!allAnswered}>check score</button>}

                    {submit && <div className="Score-area"><span className="Score-text">you scored {score}/5 right</span> <button onClick={start}>play again</button></div>}

                </div>)}
        </>
    )
}

