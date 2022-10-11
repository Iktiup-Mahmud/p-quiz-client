import React from 'react';
import Card from 'react-bootstrap/Card';
import './Header.css'


const Header = () => {
    return (
     <div className='main-container'>
        <div className='header-container'>
        <div className="quiz-img">
            <img src="https://static.vecteezy.com/system/resources/previews/003/206/208/original/quiz-time-neon-signs-style-text-free-vector.jpg" alt="" />
        </div>
        <div className="body">
            <h1>Quiz time</h1>
        </div>
      </div>
     </div>
  );
}


export default Header;