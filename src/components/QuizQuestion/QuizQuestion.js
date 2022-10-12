import React from 'react';
import Options from '../Options/Options';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import './QuizQuestion.css'

const QuizQuestion = ({quiz}) => {
    const {id, question, correctAnswer, options} = quiz;

    
    return (
        <div className='border border-danger border-3 rounded-3 container m-5 p-4'>
            <div className='row'>
                <h2 className='col-10'>Question: {question.slice(3, -4)}</h2>
                <EyeIcon className='col-2 text-dark iconEye'></EyeIcon>
                <EyeSlashIcon className='col-2 text-dark iconEye'></EyeSlashIcon>
            </div>
            <div className='row gx-5 gy-2 p-4'>
                {
                    options.map(option => <Options option={option} correctAnswer={correctAnswer}></Options>)
                }
            </div>
        </div>
    );
};

export default QuizQuestion;