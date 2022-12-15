import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import './QuizForm.css';

const QuizForm = ({ currentQuestion, userAnswer, setUserAnswer, handleSubmit }) => {
  return (
    <div className='quiz-form'>
      <Typography className={`question-text`}>{currentQuestion}</Typography>
      <TextField
        onChange={(event) => {
          setUserAnswer(event.target.value);
        }}
        value={userAnswer}
        className='answer-box'
        size='small'
      />
      <Button className='submit-button' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default QuizForm;
