import React from 'react';

const AirportAnswer = ({ answer }) => (
    <div>
        <h2 style={{ marginBottom: 0 }}>Answer: {answer.country === answer.address['iso_country'] ?
                <span style={{ color: '#006749', marginLeft: `.4rem` }}>Correct!</span>
                :
                <span style={{ color: '#671100', marginLeft: `.4rem`  }}>Incorrect.</span>
            }</h2>
        <div style={{ paddingLeft: `1rem` }}>
            <p style={{ marginBottom: `.3rem` }}>{answer.address['ident']} –  {answer.address['name']}, {answer.address['municipality']}, {answer.address['iso_country']}</p>
            <p style={{ fontStyle: `italic`, marginBottom: `.3rem` }}>
                <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${answer.address['latitude']},${answer.address['longitude']}`}>
                    View Location
                </a>
            </p>
            
        </div>
    </div>
)

export default AirportAnswer

