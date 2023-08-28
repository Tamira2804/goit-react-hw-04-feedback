import React from 'react';

import './FeedbackOptions.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className="FeedbackOption__list">
    {options.map(option => (
      <li key={option} className="FeedbackOption__item">
        <button
          onClick={() => onLeaveFeedback(option.toLowerCase())}
          className="FeedbackOption__btn"
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
