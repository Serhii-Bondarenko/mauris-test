import React from 'react';

import './HomeScreen.css';
import poster from '../../assets/image/Layer 22.png';
import { AppCalendar } from '../../components';

const HomeScreen = () => {
    return (
        <div className='home'>
            <div className='content'>
                <div className='home__poster'>
                    <img src={poster} alt='TV'/>
                </div>
                <p className='home__txt'>
                    To view a list of episodes, please select the desired month and day.
                </p>
            </div>
            <AppCalendar/>
        </div>
    );
};

export { HomeScreen };