// components/WordOfTheDay.js
import React, { useState, useEffect } from 'react';

const randomWords = ['serendipity', 'ephemeral', 'ubiquitous', 'ethereal'];

function WordOfTheDay() {
    const [word, setWord] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * randomWords.length);
        setWord(randomWords[randomIndex]);
    }, []);

    return <h2>Word of the Day: {word}</h2>;
}

export default WordOfTheDay;
