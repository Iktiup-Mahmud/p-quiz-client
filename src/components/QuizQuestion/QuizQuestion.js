import React from 'react';
import Options from '../Options/Options';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import './QuizQuestion.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({quiz}) => {
    const {question, correctAnswer, options} = quiz;
    const handelEye = () => {
        toast(`🦄 The correct answer is "${correctAnswer}"`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
            
            // });
    
    
    return (
        <div className='border border-danger border-3 rounded-3 container m-5 p-4'>
            <div className='row'>
                <h2 className='col-10'>Question: {question.slice(3, -4)}</h2>
                <EyeIcon onClick={ () => handelEye()} className='col-2 text-dark iconEye'></EyeIcon>
            </div>
            <div className='row gx-5 gy-2 p-4'>
                {
                    options.map(option => <Options option={option} correctAnswer={correctAnswer}></Options>)
                }
            </div>

            <ToastContainer/>
        </div>
    );
};

export default QuizQuestion;