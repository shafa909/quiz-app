import React, { useState } from 'react';
import './QuizBoard.css';
import ScoreBoard from './ScoreBoard';

const QuizBoard = ({ theme }) => {
  const [score, setScore] = useState(0);
  const [mistakes, SetMistakes] = useState(0);

  return (
    <div className={`quiz-board-container board-${theme}`}>
      <ScoreBoard score={score} mistakes={mistakes} />
    </div>
  );
};

export default QuizBoard;
