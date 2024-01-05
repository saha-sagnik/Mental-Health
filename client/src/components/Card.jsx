// Quiz.js
import React, { useEffect, useState } from 'react';
import { QuizData } from '../constants/data.js';
import QuizResult from './QuizResult.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/InfoSlice.js';

function Quiz() {

    const navigate = useNavigate();
  const status = useSelector(Store=>Store.info.loggedIn) ;
//     if(!status){
//     navigate('/login');
//     console.log(status);
//   }

  const { id } = useParams();
  const cardId = `card${id}`;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [items, setItems] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedInfo = JSON.parse(localStorage.getItem('info'));
  }, []);

  const handleAdd = async () => {
    dispatch(addItem({ques:QuizData[cardId][currentQuestion].question, number: currentQuestion, data: items }));
  };

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData[cardId].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[cardId][currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const navigateToShow = ()=>{
    setTimeout(()=>{
        navigate('/show');
    },2000)
  }


  return (
    <div className="bg-blue-200">
      <div className="flex py-8 items-center justify-center">
        {showResult ? (
          <>
            <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <span class="font-medium">Success alert!</span> Your Responses have been saved.
                {navigateToShow()}
            </div>
          </>
        ) : (
          <>
            <div className="border-box w-[400] min-h-400 bg-white rounded-lg shadow p-10 relative">
              <div className="question mb-8">
                <span className="text-xl justify-center font-bold">
                  {QuizData[cardId][currentQuestion].question}
                </span>
              </div>
              <div className="flex flex-col w-full p-5">
                {QuizData[cardId][currentQuestion].options.map((option, i) => (
                  <button
                    key={i}
                    className={`option-btn box-shadow hover:bg-blue-300 mb-2 p-2 rounded-md transition-all ${
                      clickedOption === i + 1 ? 'bg-blue-600 text-white' : 'bg-white'
                    }`}
                    onClick={() => {
                      setClickedOption(i + 1);
                      setItems(option);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <input
                type="button"
                value="Next"
                className="absolute cursor-pointer bottom-5 right-5 px-5 py-2 bg-blue-600 text-white rounded-md shadow-md font-bold transition-all hover:bg-blue-700"
                onClick={async () => {
                  changeQuestion();
                  handleAdd(currentQuestion);
                  setItems();
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
