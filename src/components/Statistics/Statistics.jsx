import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="Feedback__statistics">
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p className="total">Total: {total}</p>
    <p className="percentage">Positive feedback: {positivePercentage}%</p>
  </div>
);

export default Statistics;
