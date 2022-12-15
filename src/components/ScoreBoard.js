import React from 'react';
import './ScoreBoard.css';
import { AiFillTrophy, AiFillCloseCircle } from 'react-icons/ai';

const ScoreBoard = ({ score, mistakes }) => {
  return (
    <div className='score-board'>
      <div className={`score `}>
        <AiFillTrophy />
        &nbsp;
        <span>Score: {score}</span>
      </div>
      <div className={`mistakes`}>
        <AiFillCloseCircle />
        &nbsp;
        <span>Mistakes: {mistakes}/3</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
