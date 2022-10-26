import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RightNav = () => {
    const [categories, setCat] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())
        .then(data => setCat(data));
    },[])
    return (
        <div>
            <h2>{categories.length}</h2>
            {
                categories.map(category=>
                    <p key = {category.id}>
                        <Link to={`/courses/category/${category.id}`}>{category.name}</Link>
                    </p>
                )
            }
        </div>
    );
};

export default RightNav;