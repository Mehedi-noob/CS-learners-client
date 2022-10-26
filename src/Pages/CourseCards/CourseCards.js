import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseCards.css'

const CourseCards = () => {
    const courses = useLoaderData();
    return (
        <div>
            {courses.map(course => <div className='my-card' key = {course.id}>
                <img src={course.image} alt="" />
                <h2>{course.title}</h2>
                <Link to={`/courses/category/${course.id}`}><Button variant="info">Info</Button></Link>
            </div>)}
        </div>
    );
};

export default CourseCards;