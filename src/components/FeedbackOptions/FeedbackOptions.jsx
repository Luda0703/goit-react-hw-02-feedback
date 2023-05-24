import React from 'react';
import { Section } from 'components/Section/Section';

export const FeedbackOptions = (good, neutral, bad) => (
            <div>
                <button type="button" onClick={good}>Good</button>
                <button type="button" onClick={neutral}>Neutral</button>
                <button type="button" onClick={bad}>Bad</button>
            </div>
)


