import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css';
import Button from 'react-bootstrap/Button';

const Quiz = ({quiz}) => {
    const {name, logo, total} = quiz;
    return (
        <div className='quiz-cart col-lg-3 col-md-4 rounded-4 m-5'>
            <div className='m-5'>
                <img src={logo} alt="" />
                <h3>{name}</h3>
                <p>Total Quiz: {total}</p>
                <Button variant="danger">Start</Button>
            </div>
        </div>
    );
};

export default Quiz;