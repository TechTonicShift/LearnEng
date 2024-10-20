// src/components/Search.js
import React, { useState } from 'react';
import axios from 'axios';
import { auth, saveSearchHistory } from '../firebase'; // Import Firebase-related functions
import { useAuthState } from 'react-firebase-hooks/auth'; // Firebase authentication hook

const Search = () => {
  const [word, setWord] = useState('');
  const [wordData, setWordData] = useState(null);
  const [user] = useAuthState(auth); // Get the logged-in user

  const fetchWordData = async () => {
    try {
      // Fetch word data from dictionary API
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setWordData(response.data[0]);

      // Save word to Firebase if user is authenticated
      if (user) {
        await saveSearchHistory(user.email, word);
      }
    } catch (error) {
      console.error('Error fetching word data:', error);
      setWordData(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWordData();
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="input"
        />
        <button type="submit" className="btn">Search</button>
      </form>

      {wordData && (
        <div className="word-data">
          <h2>{wordData.word}</h2>

          {/* Phonetics */}
          {wordData.phonetics.map((phonetic, index) => (
            <div key={index}>
              <p>Phonetic: {phonetic.text}</p>
              {phonetic.audio && (
                <audio controls src={phonetic.audio}>
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          ))}

          {/* Meanings */}
          {wordData.meanings.map((meaning, index) => (
            <div key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              {meaning.definitions.map((definition, defIndex) => (
                <p key={defIndex}>Definition: {definition.definition}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
