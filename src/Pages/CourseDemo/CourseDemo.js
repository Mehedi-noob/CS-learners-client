import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaKey,FaFilePdf } from "react-icons/fa";

const CourseDemo = () => {
    const course = useLoaderData();
    return (
        <div className='container text-center'>
            <small>This is demo version of course not premium</small>
            <h1>{course.title}</h1>
            <Button variant = "primary"><FaFilePdf></FaFilePdf></Button>
            <img className='rounded mx-auto d-block border border-primary m-3 p-3' src={course.image} alt="" />
            <p>◉ {course.details[0]}.....</p>
            <Link to = {`/courses/details/${course.id}`} ><Button variant= "warning"><FaKey></FaKey> get premium version to unlock full content</Button></Link>
        </div>
    );
};

export default CourseDemo;