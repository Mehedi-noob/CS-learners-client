import React from 'react';
import './Faq.css';

const Faq = () => {
    return (
        <div className='faq-questions'>
            <h1>Frequently asked questions</h1>
            <div>
                <h1>what is CS ?</h1>
                <p>Ans. Computer science is the study of computation, automation, and information.[1] Computer science spans theoretical disciplines (such as algorithms, theory of computation, information theory, and automation) to practical disciplines (including the design and implementation of hardware and software).</p>
            </div>
            <div>
                <h1>Why will u study it ?</h1>
                <p>Ans. The most important aspect of computer science is problem solving, an essential skill for life. Students study the design, development and analysis of software and hardware used to solve problems in a variety of business, scientific and social contexts.

                </p>
            </div>
            <div>
                <h1>how study computer science help society?</h1>
                <p>Ans. Computer Science has enabled the development of sophisticated tools that can help tackle environmental problems. Issues like pollution, waste management and disposal, disease identification and containment, and others can be easily tackled using computers.</p>
                <h1>What will you find exciting in cs?</h1>
                <p>Ans. Computing offers great opportunities for true creativity and innovativeness. Computing has space for both collaborative work and individual effort. Computing is an essential part of well-rounded academic preparation. Future opportunities in computing are without boundaries.
                </p>
            </div>
        </div>
    );
};

export default Faq;