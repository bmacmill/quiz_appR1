//i'm completely stumped... this is a mess, but 
//1. i can't get the onclick to work on the nested shuffle choices. i suspect i'm going about it the wrong way making
//all the choices objects?? how can i click a choice and set isClicked to the target to true and the rest to false?
//2. i had to set the setTimeout to 6 seconds becase I keept getting a "429 (Too Many Requests)". i'm not sure what I'm
//doing wrong there to cause so many requests?

import React from "react";
import { nanoid } from "nanoid";
import QuizQuestion from "./QuizQuestion"
//not he using yet
import he from "he"
//not usig loader yet
import { FadeLoader } from "react-spinners";
import "./AAA.css"


// spinner css
//not using spinner yet
const spinnerCss = {
    margin: '50% auto',
};


export default function App() {


    // const [loading, setLoading] = React.useState(true);


    const [quiz, setQuiz] = React.useState([])


    React.useEffect(() => {
        const url = "https://opentdb.com/api.php?amount=5&type=multiple"
        async function getQuiz() {
            const res = await fetch(url)
            const data = await res.json()
            const quizDataArray = await data.results.map((quizQuestion) => {
                return {
                    question: he.decode(quizQuestion.question),
                    id: nanoid(),
                    correct: quizQuestion.correct_answer,
                    fullChoices: fullArray(quizQuestion.incorrect_answers, quizQuestion.correct_answer),
                    selectedAnswer: '',
                    isSelected: false
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
        }, 6000)


        return () => {
            console.log("what needs to be cleaned up?")
        }
    }, [])
    console.log("state", quiz)

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


    function fullArray(array1, array2) {
        const answers = []
        array1.map((el) => {
            answers.push({
                name: el,
                id: nanoid(),
                isClicked: false,
                isCorrect: false
            })
        })
        answers.push({
            name: array2,
            id: nanoid(),
            isClicked: false,
            isCorrect: true
        })

        return answers
    }


    //modified from w3schools.com 
    //not using anymore
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


    function handleClick(question, target, choices) {
        //this is useless but does work


        const clickedAnswer = choices.find((el) => {
            return el.name === target

        })


        console.log("ce", clickedAnswer.name)
        const clickedOn = question.shuffleChoices.find((el) => el.name === target)
        // console.log(clickedOn)
        setQuiz(prevQuiz => prevQuiz.map((quest) => {

            return quest.id === question.id ?
                {
                    ...quest,
                    selectedAnswer: clickedOn.name,
                    isSelected: true,
                    ///map over the shoices, 
                    //set one choice to isClicked: true, the rest to false

                }
                : quest

        }))

    }

    //map the questions to the return.,,,,

    const quizElements = quiz.map((question, index) => {
        // console.log("question index", index)
        return <QuizQuestion
            key={question.id}
            text={question.question}
            choices={question.shuffleChoices}
            isSelected={question.isSelected}
            isClicked={question.shuffleChoices.isClicked}
            handleClick={(e) => {
                handleClick(question, e.target.textContent, question.shuffleChoices)
            }}
            correctAnswer={question.fullChoices}

        />

    })




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

