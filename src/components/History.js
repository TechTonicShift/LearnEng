// components/History.js
import React from 'react';

function History({ history }) {
    return (
        <div>
            <h2>Your Search History</h2>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{item.word} - {new Date(item.timestamp).toLocaleString()}</li>
                ))}
            </ul>
            <h3>Total Words Searched: {history.length}</h3>
        </div>
    );
}

export default History;
