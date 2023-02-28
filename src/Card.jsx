import React from 'react';


export function Card({question, answer}) {

    
    return (
        <div>
            <p>Question: {question}</p>
            <p>Answer: {answer}</p>
        </div>
    );
}

