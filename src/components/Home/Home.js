import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizs = useLoaderData();
    const {data} = quizs;
    return (
        <div className='container'>
            <Header></Header>
            <div className='row g-2 overflow-hidden'>
                {
                    data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;