import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import './Quiz.css';
import Button from 'react-bootstrap/Button';

const Quiz = ({quiz}) => {
    const {name, logo, total, id} = quiz;

    const navigate = useNavigate();
    const handelBtn = () => {
        navigate(`/quiz/${id}`)
    }

    return (
        <div className='quiz-cart col-lg-3 col-md-4 rounded-4 m-5'>
            <div className='m-5'>
                <img src={logo} alt="" />
                <h3>{name}</h3>
                <p>Total Quiz: {total}</p>
                <Button variant="danger" onClick={handelBtn}>Start</Button>
            </div>
        </div>
    );
};

export default Quiz;