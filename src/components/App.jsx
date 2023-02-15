import { useState } from 'react';
import {Styles}  from './Styles';

import { Notification } from './Notification/Notification.jsx';
import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';

export const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const handleLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
    

    
      default:
        break;
    }
  };

  const positivePercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };


  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + bad + neutral
  // }; 

  // handleLeaveFeedback = type => {
  //   this.setState(prevState => {
  //     return {
  //       [type]: prevState[type] + 1,
  //     };
  //   });
  // }

  // countPositiveFeedbackPercentage() {
  //   const { good } = this.state;
  //   const total = this.countTotalFeedback();
  //   if (!total) {
  //     return 0;
  //   }
  //   return Math.round((good / total) * 100);
  // }


  
    return (
      <>
        <Styles />
        <Section title="Please leave feedbacd">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={positivePercentage()}
            />
          )}
        </Section>
      </>
    );
}