import React, { useState } from 'react'
import { QuizData } from '../constants/data.js'
import QuizResult from './QuizResult.jsx';
import {useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/InfoSlice.js';

function Quiz() {
    const {id} = useParams();
    const cardId = `card${id}`;
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [items,setItems] = useState([]);
    const [showResult,setShowResult]=useState(false);
    const Dispatch = useDispatch();
    const handleAdd = ()=>{
        Dispatch(addItem({i:items}))  
    }
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData[cardId].length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[cardId][currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
  <div className='bg-blue-200'>
   
    <div className="flex py-8 items-center justify-center">
        {showResult ? (
            <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
        ) : (
            <>
                <div className="border-box w-[400] min-h-400 bg-white rounded-lg shadow p-10 relative">
                    <div className="question mb-8">
                        <span className="text-xl justify-center font-bold">{QuizData[cardId][currentQuestion].question}</span>
                    </div>
                    <div className="flex flex-col w-full p-5">
                        {QuizData[cardId][currentQuestion].options.map((option, i) => (
                            <button
                                key={i}
                                className={`option-btn box-shadow hover:bg-blue-300 mb-2 p-2 rounded-md transition-all ${
                                    clickedOption === i + 1 ? 'bg-blue-600 text-white' : 'bg-white'
                                }`}
                                onClick={() => {
                                    setClickedOption(i + 1)
                                    setItems(...items,option);
                                }
                                }
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <input
                        type="button"
                        value="Next"
                        className="absolute cursor-pointer bottom-5 right-5 px-5 py-2 bg-blue-600 text-white rounded-md shadow-md font-bold transition-all hover:bg-blue-700"
                        onClick={()=>{
                            changeQuestion()
                            handleAdd();
                        }}
                    />
                </div>
            </>
        )}
    </div>
</div>
  )
}

export default Quiz