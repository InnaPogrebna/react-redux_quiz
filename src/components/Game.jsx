/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector } from 'react-redux';
import { questions } from '../questions';

export const Game = ({ question, onClickVariant }) => {
  const stepQ = useSelector((state) => {
    const { stepReducer } = state;

    return stepReducer.stepQ;
  });
  const percentage = Math.ceil(stepQ / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner" />
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (
          <li key={item} onClick={() => onClickVariant(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
