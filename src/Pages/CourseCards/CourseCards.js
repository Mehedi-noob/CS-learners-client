import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './CourseCards.css'

const CourseCards = () => {
    const courses = useLoaderData();
    return (
        <div>
            {courses.map(course => <div className='my-card' key = {course.id}>
                <img src={course.image} alt="" />
                <h2>{course.title}</h2>
                <Button variant="info">Info</Button>
            </div>)}
        </div>
    );
};

export default CourseCards;