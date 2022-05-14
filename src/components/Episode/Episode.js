import React from 'react';

import './Episode.css';

const Episode = ({ episode, setLink }) => {
    const { season, number, show } = episode;

    return (
        <div className='episode'>
            <img
                src={show.image?.medium || 'https://cdn3.vectorstock.com/i/thumb-large/51/72/no-photo-available-icon-default-image-symbol-vector-40885172.jpg'}
                alt={show.name}
                onClick={() => setLink(show.image?.original)}
            />
            <div className='title'>
                <div className='title__info'>
                    <h4>
                        {show.name}
                    </h4>
                    <p>
                        rating: {show.rating.average}
                    </p>
                </div>
                <div className='title__tool'>
                    <p>
                        season: {season}
                    </p>
                    <p>
                        epiode: {number}
                    </p>
                </div>
            </div>
        </div>
    );
};

export {Episode};