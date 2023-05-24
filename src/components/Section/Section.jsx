import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import React from 'react';

export class Section extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    buttonGood = () => {
        this.setState (prevState => {
           return {
            good: prevState.good +1,
           }
        })
    }
    

    buttonNeutral = () => {
        this.setState (prevState => {
            return {
            neutral: prevState.neutral +1,
            }
         })
    }

    buttonBad = () => {
        this.setState (prevState => {
            return {
            bad: prevState.bad +1,
            }
         })
    }


    render() {
        return (
            <div>
                <h1>Please leave Feedback</h1>
                <FeedbackOptions good={this.buttonGood} neutral={this.buttonNeutral} bad={this.buttonBad}></FeedbackOptions>
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}></Statistics>
            </div>
            
        )
    }
}