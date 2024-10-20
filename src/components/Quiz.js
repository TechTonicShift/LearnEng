// components/Quiz.js
import React, { useState } from 'react';

const quizWords = [
    { word: 'serendipity', definition: 'A fortunate happenstance or pleasant surprise' },
    { word: 'ephemeral', definition: 'Lasting for a very short time' },
    { word: 'ubiquitous', definition: 'Present everywhere at once' },
];

function Quiz() {
    const [quizWord, setQuizWord] = useState(null);
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');

    const startQuiz = () => {
        const randomIndex = Math.floor(Math.random() * quizWords.length);
        setQuizWord(quizWords[randomIndex]);
        setFeedback('');
        setAnswer('');
    };

    const submitAnswer = () => {
        if (quizWord.word.toLowerCase() === answer.toLowerCase()) {
            setFeedback('Correct!');
        } else {
            setFeedback(`Incorrect. The correct word was "${quizWord.word}".`);
        }
    };

    return (
        <div>
            <h2>Quiz Time!</h2>
            <button onClick={startQuiz}>Start Quiz</button>
            {quizWord && (
                <div>
                    <p>Definition: {quizWord.definition}</p>
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Guess the word"
                    />
                    <button onClick={submitAnswer}>Submit Answer</button>
                    <p>{feedback}</p>
                </div>
            )}
        </div>
    );
}

export default Quiz;
