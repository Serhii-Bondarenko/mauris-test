import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';

import './MainScreen.css';
import { appService } from '../../services';
import { Episode, Error, Loader } from '../../components';

const MainScreen = () => {
    const { pathname } = useLocation();

    let date = pathname.split('/');
    date = date[date.length - 1].toString();

    const main = useRef();

    const [data, setData] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [currentItem, setCurrentItem] = useState(0);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [link, setLink] = useState('');

    const fetchData = async () => {
        try {
            await appService.getAll(date).then(res => {
                if(!res.length) {
                    setError('schedule is empty');
                }
                setData([...res])
            });
            setLoading(false);
        } catch (e) {
            setError(e.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const pagination = () => {
        const lastStep = (data.length - 5) % 5 !== 0;

        if(currentItem === 0) {
            setEpisodes([...data.slice(0, 5)]);

            return;
        }

        if (lastStep && currentItem + 5 >= data.length) {
            setEpisodes(prevState => [...prevState, ...data.slice(currentItem)]);

            return;
        }
        
        setEpisodes(prevState => [...prevState, ...data.slice(currentItem, currentItem + 5)]);
    }

    useMemo(() => {
        pagination();
    }, [currentItem, loading])

    const managePages = () => {
        if (episodes.length === data.length) {
            setCurrentItem(0);

            return;
        }

        setCurrentItem(prevState => prevState + 5);
    }

    return (
        <>
            {
                error ? <Error message={error} /> : loading ? <Loader/> :
                    <div className='main' ref={main}>
                        <div className='info'>
                            {dayjs(date).format('DD MMMM YYYY')}
                        </div>
                        <div className='episodes-list'>
                            {
                                episodes.map(item => <Episode
                                    setLink={setLink}
                                    key={item?.id}
                                    episode={item}
                                />)
                            }
                        </div>
                        {
                            data.length > 5 && <button className='btn' onClick={managePages}>
                                {episodes.length === data.length ?'to Start' : 'Next'}
                            </button>
                        }
                        {
                            link && <div className='modal' onClick={() => setLink('')}>
                                <img
                                    style={{height: window.screen.height, width: window.screen.width}}
                                    src={link}
                                    alt='Original'
                                />
                            </div>
                        }
                    </div>
            }
        </>
    );
};

export { MainScreen };