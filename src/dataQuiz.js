const dataQuiz = {
    "response_code": 0,
    "results": [
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Frank Lloyd Wright was the architect behind what famous building?",
            "correct_answer": "The Guggenheim",
            "incorrect_answers": [
                "Villa Savoye",
                "Sydney Opera House",
                "The Space Needle"
            ]
            
        },
        {
            "type": "multiple",
            "difficulty": "easy",
            "category": "General Knowledge",
            "question": "What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?",
            "correct_answer": "Swiss Air",
            "incorrect_answers": [
                "Air France",
                "British Airways",
                "TWA"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "hard",
            "category": "General Knowledge",
            "question": "Which musician has collaborated with American producer Porter Robinson and released the 2016 song &quot;Shelter&quot;?",
            "correct_answer": "Madeon",
            "incorrect_answers": [
                "Mat Zo",
                "deadmau5",
                "Zedd"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Which of the following Ivy League universities has its official motto in Hebrew as well as in Latin?",
            "correct_answer": "Yale University",
            "incorrect_answers": [
                "Princeton University",
                "Harvard University",
                "Columbia University"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "General Knowledge",
            "question": "Amsterdam Centraal station is twinned with what station?",
            "correct_answer": "London Liverpool Street",
            "incorrect_answers": [
                "Frankfurt (Main) Hauptbahnhof",
                "Paris Gare du Nord",
                "Brussels Midi"
            ]
        }
    ]
}

export default dataQuiz


const stuff = [
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "General Knowledge",
        "question": "Frank Lloyd Wright was the architect behind what famous building?",
        "correct_answer": "The Guggenheim",
        "incorrect_answers": [
          { name: "Villa Savoye", isCorrect: false},
          {  name:  "Sydney Opera House", isCorrect: false},
          { name:   "The Space Needle", isCorrect: false}
        ]
      
        
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?",
        "correct_answer": "Swiss Air",
        "incorrect_answers": [
           { name: "Air France", isCorrect: false},
           { name: "British Airways", isCorrect: false},
           { name: "TWA", isCorrect: false}
        ]
    }
]

// const stuffIt = stuff.map((el) =>{
// return el.incorrect_answers.map((ans) =>{
// if(el.ans.name.length > 4){
//   return {
//        ...ans,
//       isNew: false
//   } 
//     } else {
//         return { ans }
//         }
//     })
// })




// const stuffIt = stuff.map((el) =>{
//             return el.incorrect_answers.map((ans) =>{
//                 if(ans.name.length > 4){
//                     return {
//                         ...ans,
//                         isNew: false
//                     } 
//                         } else {
//                             return { ans }
//                             }
//                     })
            
            
//             })
    
    
    



// console.log(stuffIt)