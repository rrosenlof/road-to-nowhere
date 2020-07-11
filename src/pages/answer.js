import React from 'react';
import Layout from '../components/layout';
import {Link} from 'gatsby'


const AnswerPage = ({ location }) => (
    <Layout>
        <h2>Your Answer:</h2>
        <p>{location.state.city}, {location.state.province}</p>
        <h2>Correct Answer:</h2>
        <p>{location.state.address['city']}, {location.state.address['province']}</p>
        <p style={{ fontStyle:`italic` }}>
            <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${location.state.address['latitude']},${location.state.address['longitude']}`}>
                View Location: {location.state.address['address']}, {location.state.address['city']}, {location.state.address['province']}
            </a>
        </p>
        <Link to="/">Next Image</Link>
        <img style={{ width: `3000px` }} src={location.state.url} alt='Selected map area'></img>
        
    </Layout>
)

export default AnswerPage