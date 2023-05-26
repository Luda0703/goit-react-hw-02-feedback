import React, { Component } from 'react';
import { Section } from './Section/Section'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
}

onLeaveFeedback = (e) => {
  this.setState (prevState => {
     return {
      [e]: prevState[e] +1,
     }
  })
}

countTotalFeedback() {
  const {good, neutral, bad} = this.state;
  return good + neutral + bad;
}

countPositiveFeedbackPercentage() {
  const { good } = this.state;
  return Math.round((good / this.countTotalFeedback()) * 100);
}


render() {
  const options = Object.keys(this.state);
  const { good, neutral, bad } = this.state;

  return (
  
    <section >
      <Section title="Please leave feedback">
         <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
      </Section>

      <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} 
           positivePercentage={this.countPositiveFeedbackPercentage()}/>
           ) : (
          <Notification name="There is no feedback" />
           )}
      </Section>
    </section>
   
)
}
    
};
 
