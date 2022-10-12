import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const QuizDetails = () => {
    const quizs = useLoaderData();
    const {data} = quizs;

    return (
        <div>
            <h1 className='text-warning p-2'>Topic: {data.name}</h1>
            <h1>QuizDetails</h1>
            {
                data.questions.map(quiz => <QuizQuestion key={quiz.id} quiz={quiz}></QuizQuestion>)
            }
        </div>
    );
};

export default QuizDetails;