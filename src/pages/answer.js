import React from 'react';
import Layout from '../components/layout';
import { Location } from '@reach/router';
import {Link} from 'gatsby'


const AnswerPage = ({location}) => (
    <Layout>
        { location.state.submitStatus === "answered" ? 
            <div>
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
            </div> :
            <div>
                <h2>Oops...</h2>
                <p>You must answer a question first.</p>
                <Link to="/">Home</Link>
            </div>
        }
    </Layout>
)

export default AnswerPage