import React from "react"
import dataQuiz from "./dataQuiz"
import QuizQuestion from "./QuizQuestion"
import { nanoid } from 'nanoid'
import "./AAA.css"
import he from "he"
import StartPage from "./StartPage"
import "./App.css"


export default function App() {
    const [startGame, setStartGame] = React.useState(false)
    const [quizData, setQuizData] = React.useState([])

    // console.log(quizData)
    const toggleGame = () => {
        setStartGame(prevStart => !prevStart)
    }

    // React.useEffect(() => {
    //     const questionDataArray = dataQuiz.results.map((question) => {
    //         return {
    //             ...question,
    //             isHere: false
    //         }
    //     })
    //     setQuizData(prevData => questionDataArray)
    // }, [])

    React.useEffect(() => {
        const questionObj = dataQuiz.results

        setQuizData(prevObj => questionObj.map((item) => {
            return {
                ...item,
                key: nanoid(),
                question: he.decode(item.question),
                correctAnswer: item.correct_answer,
                //incorrectAnswer: item.incorrect_answers,
                isSelected: false,
                fullChoices: fisherYatesArrayShuffle(addIdsToChoices([...item.incorrect_answers, item.correct_answer])),
                answerSelected: false
                //correct_answer: { name: item.correct_answer, id: nanoid() },
                //incorrectChoices: idIncorrect(item.incorrect_answers)

            }
        }))
        console.log("set", quizData)
    }, [])

    function addIdsToChoices(arr) {
        return arr.map((el) => {
            return {
                name: el,
                id: nanoid()
            }
        })
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

    //original use effect
    // React.useEffect(() => {


    //     const questionDataArray = dataQuiz.results.map((question) => {
    //         return {
    //             ...question,
    //             question: he.decode(question.question),
    //             correct_answer: { choice: question.correct_answer, id: nanoid() },
    //             //incorrect_answers: question.incorrect_answers,
    //             key: nanoid(),
    //             idIncorrect: incorrectChoice(question.incorrect_answers),
    //             shuffledAnswers: fisherYatesArrayShuffle([...question.incorrect_answers, question.correct_answer]),
    //             selectedAnswer: ""
    //         }
    //     })
    //     //  console.log(questionDataArray)


    //     ///updatae the array here instead of on import??????



    //     setQuizData(questionDataArray.map((data) => {
    //         return {
    //             ...data,
    //             isSelected: true
    //         }
    //     }))
    //     console.log("data", quizData)
    // }, [])

    function incorrectChoice(arr) {
        return arr.map((item) => {
            return {
                choice: item,
                id: nanoid()
            }
        })
    }

    function handleClick(q) {
        
    }

    const quizElements = quizData.map((question) => {
        return <QuizQuestion
            key={question.key}
            text={question.question}
            choices={question.fullChoices}
            handleClick={() => handleClick(question.fullChoices)}
            correctAnswer={question.correctAnswer}
            answerSelected={question.answerSelected}

        />

    })


    return (
        <div>
            {!startGame ? <StartPage start={toggleGame} /> :

                <div className="QuizBoard">
                    {quizElements}
                    <button>Check Answers</button>
                </div>}
        </div>
    )
}




    //hints
    //two screens start and questions
    //pull 5 questions
    //tally correct answers
    //style and polish
    //use he or html entities to get corret text
    //https://www.npmjs.com/package/he#hedecodehtml-options
    //https://www.npmjs.com/package/html-entities#user-content-decodetext-options
    //limit answer choice to 1; add selectedAns to object





// React.useEffect(() => {
//     async function getQuizQuestions() {
//         const res = await fetch("https://opentdb.com/api.php?amount=5&category=9")
//         const data = await res.json()
//         const newArray = data.results.map((el)=>{
//             return {
//                 ...el,
//                 incorrect_answers: fisherYatesArrayShuffle([...el.incorrect_answers, el.correct_answer]),
//                 isCorrect: el.correct_answer,
//                 selectedAnswer: ""
//             }
//         })
//         console.log(newArray)
//     }
//     getQuizQuestions()

//     return () => {

//     }
// }, [])


//do i need object with ids for choices array? with is clicked and id? yes to all
//how doi populate the selected answer key?
//ho do i check correct asnwer?
//how do i keep track of score??

//1. get them on the page...










 // React.useEffect(() => {
    //     async function getQuestions() {
    //         const res = await fetch("https://opentdb.com/api.    
    //         php ? amount = 5")
    //         const data = await res.json()
    //         //console.log(data.data.memes)
    //         const apiData = data.results
    //         console.log(apiData)
    //         setQuizData(apiData) 

    //     }
    //     getQuestions()

    // }, [])
    //https://opentdb.com/api.php?amount=5
    ///modidy 1

    // const questionEl = quizData.map(q => (
    //     <Question
    //         key={nanoid()}
    //         question={q.question}
    //         incorrect={q.incorrect_answers}
    //         correct={q.correct_answer}
    //     />
    // ))


    // const diceElements = dice.map(die => (
    //     <Die
    //         key={die.id}
    //         value={die.value}
    //         isHeld={die.isHeld}
    //         holdDice={() => holdDice(die.id)}
    //     />
    // ))


    // const array = [
    //     "Mat Zo",
    //     "deadmau5",
    //     "Zedd"]
    //     fisherYatesArrayShuffle(["Mat Zo", "deadmau5", "Zedd"])
    //    const top = array.length; 
    //     while (--top) { 
    //         const current = Math.floor(Math.random() * (top + 1)); 
    //         const tmp = array[current]; 
    //         array[current] = array[top]; 
    //         array[top] = tmp; 
    //     } 

