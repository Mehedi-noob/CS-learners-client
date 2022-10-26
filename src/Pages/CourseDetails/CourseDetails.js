import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    return (
        <div>
            <h1>{course.title}</h1>
            {course.details.map(point => <p>bullet {point}</p>)}
        </div>
    );
};

export default CourseDetails;