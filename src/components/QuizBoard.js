import React, { useEffect, useState } from 'react';
import './QuizBoard.css';
import ScoreBoard from './ScoreBoard';
import QuizForm from './QuizForm';
import { sha1 } from 'crypto-hash';
import { getQuestions } from './api';
import PopupModel from './PopupModel';

const QuizBoard = ({ theme }) => {
  const [questionMap, setQuestionMap] = useState(new Map());
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const onHandleSubmit = async () => {
    const hash = await sha1(userAnswer);
    if (questionMap.has(currentQuestion) && questionMap.get(currentQuestion) === hash) {
      setScore(score + 1);
    } else {
      setMistakes(mistakes + 1);
    }
    setUserAnswer('');
    if (mistakes < 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const updateQuestions = (questionList) => {
    questionList.forEach((qs) => {
      if (!questionMap.has(qs.question)) {
        setQuestionMap((prev) => new Map([...prev, [qs.question, qs.answerSha1]]));
      }
    });
  };
  useEffect(() => {
    if (mistakes === 3) setShowPopup(true);
  }, [mistakes]);
  useEffect(() => {
    if (mistakes < 3 && currentIndex === questionMap.size - 2) {
      getQuestions().then(async (result) => {
        updateQuestions(result);
      });
    }
    setCurrentQuestion(Array.from(questionMap.keys())[currentIndex]);
  }, [currentIndex, questionMap]);
  useEffect(() => {
    getQuestions().then(async (result) => {
      console.log(result);
      updateQuestions(result);
    });
  }, []);

  return (
    <div className={`quiz-board-container board-${theme}`}>
      <ScoreBoard score={score} mistakes={mistakes} />
      <QuizForm
        currentQuestion={currentQuestion}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        handleSubmit={onHandleSubmit}
      />
      <PopupModel open={showPopup} score={score} theme={theme} />
    </div>
  );
};

export default QuizBoard;
