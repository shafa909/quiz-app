import React, { useEffect, useState } from 'react';
import './QuizBoard.css';
import ScoreBoard from './ScoreBoard';
import QuizForm from './QuizForm';
import { getQuestions } from './api';

const QuizBoard = ({ theme }) => {
  const [score, setScore] = useState(0);
  const [mistakes, SetMistakes] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  const onHandleSubmit = () => {
    console.log('user ans', userAnswer);
    setUserAnswer('');
  };

  useEffect(() => {
    getQuestions().then((result) => {});
  }, []);

  return (
    <div className={`quiz-board-container board-${theme}`}>
      <ScoreBoard score={score} mistakes={mistakes} />
      <QuizForm
        currentQuestion={''}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        handleSubmit={onHandleSubmit}
      />
    </div>
  );
};

export default QuizBoard;
