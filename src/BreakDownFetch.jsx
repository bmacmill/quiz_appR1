

// const [triviaQuestions, setTriviaQuestions] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [areAllAnswered, setAreAllAnswered] = useState(false);
//   const [correctScore, setCorrectScore] = useState(0);
//   const [questionCount, setQuestionCount] = useState(0);
//   const [playCount, setPlayCount] = useState(0); // is this used anywhere?
//   const [isFetchingTrivia, setIsFetchingTrivia] = useState(false);


// https://v1.scrimba.com/scrim/cobf147449d138ae8e98d8712




//use effect from react
useEffect(() => {
  //not sure what this piece of state does
  setIsFetchingTrivia(true);
  // Async function to fetch new trivia questions
  async function getTriviaQuestions() {
    //   start of a try block...
    try {
      //the body of the fecth
      const response = await fetch('https://opentdb.com/api.php?amount=5');
      const data = await response.json();
      //notice here they make an array and map over the data as it comes back
      const triviaArray = await data.results.map(triviaObj => {
        return {
          //adding this property
          id: nanoid(),
          type: triviaObj.type,
          difficulty: triviaObj.difficulty,
          category: triviaObj.category,
          question: triviaObj.question,
          correctAnswer: triviaObj.correct_answer,
          incorrectAnswers: triviaObj.incorrect_answers,
          //creating the shuffled array property with incorrect adn correct asnwer
          //not sure how the shuffleArray function works yet.....
          shuffledArray: shuffleArray([
            ...triviaObj.incorrect_answers,
            triviaObj.correct_answer,
          ]),
          //adding this new key that's empty
          selectedAnswer: '',
        };
      });

      //setting state of trivia quesitons to new array created from fetch
      setTriviaQuestions(triviaArray);

      //how many qeustions you want??? not sure??? why this is used... i will hard codde it
      setQuestionCount(triviaArray.length);
      //not sure what this state is
      setIsFetchingTrivia(false);
      ///end of try blocka and beginning of catch block
    } catch (err) {
      //console.loog the error if one
      console.error(err);
    }
  }

  // Debounce to prevent rate limiting
  //need to see more on debouncing....
  const timeoutId = setTimeout(() => {
    getTriviaQuestions();
  }, 1000);


  //this is clan up but i'm not sure how the clear timeout works
  return () => {
    clearTimeout(timeoutId);
    // Turn off loading animation
    setIsFetchingTrivia(false);
  };
  ///not sure what play count state is...
}, [playCount]);