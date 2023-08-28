import React, { useState } from 'react';
import './App.scss';

import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  const totalFeedback = countTotalFeedback();

  return (
    <div className="App__container">
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        options={['Good', 'Neutral', 'Bad']}
        onLeaveFeedback={handleFeedback}
      />

      <h2>Statistics:</h2>
      {totalFeedback === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </div>
  );
}
