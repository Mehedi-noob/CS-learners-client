import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-questions'>
            <h1>Questions and Answers (Q & A)</h1>
            <div>
                <h1>what is cors ?</h1>
                <p>Ans. Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.</p>
            </div>
            <div>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>Ans. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                Auth0, MongoDB, Passport, Okta are the most popular alternatives and competitors to Firebase Authentication.

                </p>
            </div>
            <div>
                <h1>How does the private route work?</h1>
                <p>Ans. he private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
                <h1>What is Node? How does Node work?</h1>
                <p>Ans. Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.
                </p>
            </div>
        </div>
    );
};

export default Blog;