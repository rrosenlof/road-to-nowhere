import React from 'react';
import Layout from '../components/layout';
import {Link} from 'gatsby'


const AnswerPage = ({ location }) => (
    <Layout>
        <div>{JSON.stringify(location.state)}</div>
        <div>
            <h2>Your Answer:</h2>
            <p>{location.state.city}, {location.state.province}</p>
            <h2>Correct Answer:</h2>
            <p>{location.state.address['city']}, {location.state.address['province']}</p>
            <p style={{ fontStyle:`italic` }}>
                <a href={`https://www.google.com/maps/search/?api=1&query=${location.state.address['latitude']},${location.state.address['longitude']}`}>
                    View Location: {location.state.address['address']}, {location.state.address['city']}, {location.state.address['province']}
                </a>
            </p>
        </div>
        <img style={{ width: `3000px` }} src={location.state.url} alt='Selected map area'></img>
        <Link to="/">Next Image</Link>
    </Layout>
)

export default AnswerPage