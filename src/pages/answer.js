import React from 'react';
import Layout from '../components/layout';
import {Link} from 'gatsby'

const AnswerPage = ({ location }) => (
    <Layout>
        <div>
            <p>{location.state.city}</p>
        </div>
        <Link to="/">Next Image</Link>
    </Layout>
)

export default AnswerPage