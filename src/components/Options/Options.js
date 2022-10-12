import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({option, correctAnswer}) => {
    const handelOption = () => {

        if (correctAnswer == option){
            toast.success(' Correct !!! ', {
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
        else{
            toast.error(' Wrong !!! Please try again...', {
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

        console.log({option})
        console.log(correctAnswer, 11)  

    }

    return (
        <div className='col-6 '>
            <div className='border border-danger rounded bg-dark text-light'>
                <label className='fs-5 p-4'>
                    <input type="radio" name="choice" value={option} onClick={ () => handelOption()} /> {option} 
                </label>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Options;