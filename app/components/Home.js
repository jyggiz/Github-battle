import React from 'react';
import { Link } from 'react-router-dom';
import { getApi } from '../utils/api';

class Home extends React.Component {
    async componentDidMount() {
        const res = await getApi();
        console.log(res);
    }

    render () {
        return (
            <div className='home-container'>
                <h1>
                    Github Battle: Battle your friends...and stuff.
                </h1>
                <Link className='button' to='/battle'>
                    Battle
                </Link>
            </div>
        )
    }
}

export default Home;
