import React, { useState } from 'react';
import { QuizData } from '../constants/data';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/InfoSlice';
import { useNavigate } from 'react-router-dom';

const FurtherQuestions = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ans, setAns] = useState(null); // State for storing user input
    const data = QuizData.commoncard;
    const [index,setIndex] = useState(0);
    const [showResult,setShowResult] = useState(false);
    const handleNext = ()=>{
      if(ans==null){
        alert("Choose an option");
        return false;
      }
      dispatch(addItem({ques:data[index].Question, number:1, data: ans }));
      setAns(null);
      return true;
    }

    const handleSubmit = ()=>{
      setShowResult(true);
      setTimeout(() => {
        navigate('/show');
      }, 1500);
    }

    return (
        <div>
          {
            showResult && 
              <>
                <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                    <span class="font-medium">Success alert!</span> Your Responses have been saved.
                    {navigateToShow()}
                </div>
              </>
        }

                  <h1>{data[index].Question}</h1>
                    {data[index].Type === "Yes/No" ? (
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <form>
                                    <input type="radio" value="Yes" checked={ans === "yes"} onChange={() => setAns("yes")} />
                                        <label for="html">Yes</label>
                                      <input type="radio" value="No" checked={ans === "no"} onChange={() => setAns("no")} />
                                        <label for="css">No</label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <input
                            type="text"
                            value={ans}
                            onChange={(e) => setAns(e.target.value)}
                        />
                    )}
                <div>
                  <button className='bg-blue-300 m-1 px-2 rounded-md'
                  onClick={(e)=>{
                    e.preventDefault();
                    const res = handleNext();
                    if(index==data.length-1){
                      const res = confirm("submit details");
                      if(res)
                        handleSubmit();
                    }
                    else if(res){
                      setIndex(index+1);
                    }
                  }}
                  >
                    Next
                  </button>
                </div>
            
            </div>
    );
};

export default FurtherQuestions;
