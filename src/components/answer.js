import React from 'react';

const Answer = ({ answer }) => (
    <div>
        <h2 style={{ marginBottom: 0}}>Correct Answer:</h2>
        <div style={{paddingLeft: `1rem`}}>
            <p style={{ marginBottom: `.3rem` }}>{answer.address['city']}, {answer.address['province']}</p>
            <p style={{ fontStyle: `italic`, marginBottom: `.3rem` }}>
                <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${answer.address['latitude']},${answer.address['longitude']}`}>
                    View Location: {answer.address['address']}, {answer.address['city']}, {answer.address['province']}
                </a>
            </p>
        </div>
    </div>
)

export default Answer

