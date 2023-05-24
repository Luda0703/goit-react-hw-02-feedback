import React from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export const Statistics = ({good, neutral, bad}) => (
    <div>   
        <h2>Statistics</h2>
            <span>Good {good}</span>
            <span>Neutral {neutral}</span>
            <span>Bad {bad}</span>
    </div>
 )




