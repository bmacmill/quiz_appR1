
import React from "react";
import QuizQuestion from "./QuizQuestion"
import StartPage from "./StartPage"
import { FadeLoader } from "react-spinners";
import he from "he"
import "./AAA.css"
import "./App.css"
import { nanoid } from "nanoid";

//1. a function to reset all state as necess
//the style effect... correct green, incorrect and shosen red... not sure how to do this.....


//track selected answer index inside each question object or use html for with radio buttons using the same name
//attribute to automatically allow one selection; style to look like buttons

//https://www.youtube.com/@ChrisBlakely/search?query=react



//does everything have to be a use effect? can I just run regular functions??? on some things
//go back over the use effect stuff....

const spinnerCss = {
    margin: '50% auto',
};

export default function App() {


    const [quiz, setQuiz] = React.useState([])

    //all questions asnswerd -- this should enable the submit button
    const [allAnswered, setAllAnswered] = React.useState(false)

    const [startPage, setStartPage] = React.useState(true)
    //score of correct answers
    const [score, setScore] = React.useState(0)

    //display score afer submitted
    const [submit, setSubmit] = React.useState(false)

    const [loading, setLoading] = React.useState(true)
    //how to dynamically style the choices??? is this a state thing, or a use effect thing?

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
            // setLoading(false)
            setLoading(false)
        }, 6000)


        return () => {
            console.log("what needs to be cleaned up?")
        }
    }, [])
   // console.log("state array", quiz)

    //not using anymore
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

    //simpler yet insert into answers
    // const idx = Math.floor(Math.random() * 4)

    // incorrect.splice(idx, 0, ans);


    //simple sort
    //this one is easier to understand, tested and works as welll as fisheryates one
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }


    function handleClick(e, choices, index, id) {
        //find the index of clicked item, set on object
        //console.log(choices, index)
        //console.log(id)

        const idx = choices.findIndex((choice) => choice.name === e.target.textContent)
        //console.log(idx)
        //set selected asnwer on object
        setQuiz(prevQuiz => prevQuiz.map((question, i) => {
            // console.log(i)
            return question.id == id ? {
                ...question,
                isSelected: true,
                selectedIndex: idx,
                selectedAnswer: e.target.textContent
            } : question
        }))
        //how to dynamiclly style????-- in the component

    }

    //a use effect that checks if all the quesitons have been asnwered, sets that state to true.
    //i'm assuming this will enable the submit button
    React.useEffect(() => {
        console.log("this is running...")
        const allSelected = quiz.filter((el) => {
            return el.isSelected === true
        })
        if (allSelected.length > 4) {
            setAllAnswered(prevAns => !prevAns)
        }
        console.log("all ans", allAnswered)
        console.log("all selected", allSelected.length)
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
        console.log("score", score)
    }, [quiz])


    //a use effect to style the choices after submit...

    React.useEffect(() => {
        if (allAnswered === true) {
            console.log("the color thingy.........")
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
    }

    return (
        <>
            {startPage && <StartPage start={start} />}

            {loading && <FadeLoader
                loading={loading}
                size={10}
                height={20}
                cssOverride={spinnerCss}
                color={'#4D5B9E'}
            />}
            <div className="QuizBoard">
                {quizElements}


                {!submit && (<button onClick={checkForScore} disabled={!allAnswered}>check score</button>)}

                {submit && (<div className="Score-area"><span className="Score-text">you scored {score}/5 right</span> <button onClick={start}>play again</button></div>)}

            </div>
        </>
    )
}

