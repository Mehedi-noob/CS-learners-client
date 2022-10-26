import React from 'react';
import { Button } from 'react-bootstrap';
import './CourseCards.css'

const CourseCards = () => {
    return (
        <div>
            <div className='my-card'>
                <img src="https://www.pexels.com/photo/woman-with-white-sunvisor-running-40751/" alt="" />
                <h2>this is title</h2>
                <Button>button</Button>
            </div>
        </div>
    );
};

export default CourseCards;