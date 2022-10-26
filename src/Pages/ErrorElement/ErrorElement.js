import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorElement.css';

const ErrorElement = () => {
    return (
        <body>
            <section class="notFound">
                <div class="img">
                    <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
                    <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
                </div>
                <div class="text">
                    <h1>404</h1>
                    <h2>PAGE NOT FOUND</h2>
                    <h3>BACK TO <Link to="/" class="yes">HOME</Link>?</h3>
                    
                </div>
            </section>
        </body>
    );
};

export default ErrorElement;