import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaFlushed } from "react-icons/fa";

const CourseDetails = () => {
    const course = useLoaderData();
    return (
        <div>
            <h1>{course.title}</h1>
            {course.details.map(point => <p><FaFlushed></FaFlushed> {point}</p>)}
        </div>
    );
};

export default CourseDetails;