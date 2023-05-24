import React from 'react';
import { Section } from "./Section/Section"
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
    return (
      <div>
        <Section>
        <FeedbackOptions></FeedbackOptions>
        <Statistics></Statistics>
        </Section>
      </div>
    )
  
};
 
