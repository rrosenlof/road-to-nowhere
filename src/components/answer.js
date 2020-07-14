import React from 'react';

const Answer = ({ answer }) => (
    <div>
        <h2>Your Answer:</h2>
        <p>{answer.city}, {answer.province}</p>
        <h2>Correct Answer:</h2>
        <p>{answer.address['city']}, {answer.address['province']}</p>
        <p style={{ fontStyle: `italic` }}>
            <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${answer.address['latitude']},${answer.address['longitude']}`}>
                View Location: {answer.address['address']}, {answer.address['city']}, {answer.address['province']}
            </a>
        </p>

    </div>
)

export default Answer