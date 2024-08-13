import React from "react"
import dataQuiz from "./dataQuiz"

export default function Fetch() {
    const [quizQuestions, setQuizQuestions] = React.useState([])

    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setMemes(data.data.memes)
    //     }
    //     getMemes()

    //     return () => {

    //     }

    // }, [])


    function setData() {
        setQuizQuesitons(dataQuiz)
    }


    return (
        <div>stuff here</div>
    )
}

// import { useState, useEffect } from 'react';
// import React from "react"
// import { nanoid } from "nanoid"
// import dataQuiz from "./dataQuiz.js"


// export default function Fetch() {
//     const [questionData, setQuestionData] = useState([])
//     const [isLoading, setIsLoading] = useState(false)

//     useEffect(() => {

//         async function getQuestionData() {
//             const res = await fetch("https://api.imgflip .com/get_memes")
//             const data = await res.json()



//         }

//         getQuestionData()

//         //this is clean up but not sure what should go here   
//         return () => {

//         }



//     }, [])



//     return (
//         <div>   <button>Load data</button>
//             {isLoading && <p>is loading is now true</p>}</div>
//     )
// }
// //     const quizQuestions = dataQuiz.map((question) => {
// //         return (

// //             <div key={nanoid()}>
// //                 <div key={nanoid()} className="qtext">{question.question}</div>
// //                 <div key={nanoid()} > {question.incorrect_answers.map(ans => <div key={nanoid()} > {ans}</div>)}</div>
// //                 <div key={nanoid()} > {question.correct_answer}</ div>
// //             </div>
// //         )

// //     })
// //     return (
// //         <>

// //             {quizQuestions}

// //         </>
// //     )


// // }
// //     const [quiz, setQuiz] = useState([]);

// //     useEffect(() => {
// //         getTriviaData();
// //     }, []);


// //     async function getTriviaData() {
// //         const resp = await axios.get('https://opentdb.com/api.php?amount=5&type=multiple')

// //         setQuiz(resp.data.results)
// //         console.log(resp.data.results)
// //     }
// //     return (
// //         <div></div>
// //     )
// // }
// // import { useState, useEffect } from 'react';
// // const Fetch = () => {
// //     const [photos, setPhotos] = useState([]);
// //     useEffect(() => {
// //         fetch('https://opentdb.com/api.php?amount=5&type=multiple')
// //             .then((res) => {
// //                 return res.json();
// //             })
// //             .then((data) => {
// //                 console.log(data);
// //                 setPhotos(data);
// //             });
// //     }, []);
// //     return (
// //         <div>

// //             {photos.map((photo) => (
// //                 <p>{photo}</p>
// //             ))}
// //         </div>
// //     );
// // };
// // export default Fetch;

// // this works in regular js.....

// // async function callQuestions() {


// //     const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple')
// //     const data = await res.json()
// //     const returnedData = data.results
// //     returnedData.forEach((el, i) => {
// //         document.getElementById("questions").innerHTML += `< p > ${ el.question }</p > <p>Ans: ${el.correct_answer}</p>`
// //     })

// // }
// // callQuestions()

// // this works in regular js.....

// // export default function Fetch(){

// //     useEffect(()=>{
// //         async function callQuestions() {


// //             const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple')
// //             const data = await res.json()
// //             const returnedData = data.results
// //             returnedData.forEach((el, i) => {
// //                 document.getElementById("questions").innerHTML += `< p > ${ el.question }</p > <p>Ans: ${el.correct_answer}</p>`
// //             })

// //         }
// //     })

// // }
// // callQuestions()

// // import { useState, useEffect } from 'react';
// // const Fetch = () => {
// //     const [users, setUsers] = useState([]);
// //     useEffect(() => {
// //         fetch('https://jsonplaceholder.typicode.com/users')
// //             .then((res) => {
// //                 return res.json();
// //             })
// //             .then((data) => {
// //                 console.log(data);
// //                 setUsers(data);
// //             });
// //     }, []);
// //     return (
// //         <div>

// //             {users.map((user) => (
// //                 <div key={user.id}>
// //                     <p> {user.name} </p>
// //                     <p> {user.email} </p>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };
// //export default Fetch;
