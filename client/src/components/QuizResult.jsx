import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        No. of questions answered:{props.score}<br/>
        Total No. of questions:{props.totalScore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult