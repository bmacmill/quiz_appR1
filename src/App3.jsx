import React from "react"
import Choices from "./Choices"

import { nanoid } from "nanoid";
// support@joshwcomeau.com
import he from "he"

export default function App() {
    const [quizData, setQuizData] = React.useState([])

    React.useEffect(() => {
        const URL = "https://opentdb.com/api.php?amount=5&type=multiple"
        async function getData() {
            const res = await fetch(URL)
            const data = await res.json()
            const returnedData = data.results

            setQuizData(returnedData.map((info) => {
                return {
                    question: info.question,
                    key: nanoid(),
                    correctAnswer: { name: info.correct_answer, isClicked: false, isCorrect: true, id: nanoid() },
                    incorrectAnswers: setIdOnChoices(info.incorrect_answers),
                    fullAnswersArray: info.correctAnswer,
                    answerSelected: false
                }

            }))

            setQuizData(prevData => prevData.map((items) => {
                return {
                    ...items,
                    fullAnswersArray: shuffle(fullArray(items.incorrectAnswers, items.correctAnswer))
                }
            }))
        }
        setTimeout(() => {
            getData()
        }, 6000)

        return () => {
            console.log("cleaning up...")
        }
    }, [])
    console.log("outside console", quizData)


    function setIdOnChoices(arr) {
        return arr.map((el) => {
            return {
                name: el,
                id: nanoid(),
                isCorrect: false,
                isClicked: false
            }
        })
    }

    function fullArray(a1, a2) {
        const answers = []
        a1.map((el) => {
            answers.push(el)
        })
        answers.push(a2)

        return answers
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    return (
        <div>
        <h1>hello</h1>
    
        </div>
    )
}

// export default function App() {

//     const [quiz, setQuiz] = React.useState([])
//     // const [choices, setChoices] = React.useState([])

//     React.useEffect(() => {
//         // const url = "https://opentdb.com/api.php?amount=5&type=multiple"
//         async function getQuiz() {
//             const res = await fetch(url)
//             const data = await res.json()
//             //now i have to edit data to my specs here
//             setQuiz(data.results.map((quizQuestion) => {
//                 return {
//                     ...quizQuestion,
//                     isClicked: false,
//                     question: he.decode(quizQuestion.question),
//                     // correct_answer: he.decode(quizQuestion.correct_answer),
//                     // incorrect_answers: he.decode(quizQuestion.incorrect_answers),
//                     id: nanoid(),
//                     // incorrectAnswers: setIdOnChoices(quizQuestion.incorrect_answers),
//                     // correctAnswer: { name: quizQuestion.correct_answer, id: nanoid() },
//                     isSelected: false,
//                     //this can't be the right way to do this??? hahaha
//                     fullChoices: fisherYatesArrayShuffle(setIdOnChoices(fullArray(quizQuestion.incorrect_answers, quizQuestion.correct_answer)))

//                 }

//             }))
//             ///set state of choices?????
//             // setChoices(quiz.fullChoices)
//             // console.log(choices)
//         }
//         setTimeout(() => {
//             getQuiz()
//         }, 6000)


//         return () => {
//             console.log("what needs to be cleaned up?")
//             }
//     }, [])
//     console.log(quiz)

//     function setIdOnChoices(arr) {
//         return arr.map((el) => {
//             return {
//                 name: el,
//                 id: nanoid(),
//                 isCorrect: false
//             }
//         })
//     }


//     function fullArray(a1, a2) {
//         const answers = []
//         a1.map((el) => {
//             answers.push(el)
//         })
//         answers.push(a2)

//         return answers
//     }


//     //modified from w3schools.com 
//     function fisherYatesArrayShuffle(arr) {
//         for (let i = arr.length - 1; i > 0; i--) {
//             let j = Math.floor(Math.random() * (i + 1));
//             let k = arr[i];
//             arr[i] = arr[j];
//             arr[j] = k;
//         }
//         return arr
//     }

// //simple sort
// //this one is easier to understand, tested and works as welll as fisheryates one
//     function shuffle(array) {
//         array.sort(() => Math.random() - 0.5);
//       }


//     function handleClick(id) {
//         //console.log(quiz)
//         const questionFound = quiz.find((el) => el.id === id)
//         console.log("founc", questionFound)
//         setQuiz(prevState => prevState.map((question) => {
//             return question.id === id ? { ...question, isClicked: !question.isClicked } : question
//         }))
//         console.log("quiz", quiz)
//     }

//     // function holdDice(id) {
//     //     setDice(prevDice => prevDice.map((die) => {

//     //       return die.id === id ?
//     //         { ...die, isHeld: !die.isHeld } :
//     //         die
//     //     }))
//     //   }

//     //map the questions to the return.,,,,

//     const quizElements = quiz.map((question) => {
//         return <QuizQuestion
//             key={question.id}
//             text={question.question}
//             choices={question.fullChoices}
//             // what needs to be passed in here??????????
//             handleClick={() => handleClick(question.id)}
//             correctAnswer={question.correct_answer}
//             isSelected={question.isSelected}
//             isClicked={question.isClicked}

//         />

//     })

//     // {dice.map((die) => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)}


//     return (
//         <>
//             <h1>hello</h1>
//             {quizElements}
//         </>
//     )
// }

