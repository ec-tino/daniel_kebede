import React from 'react';
import Styles from './CV.module.css'

const CV = () => {
    return (
        <div className={Styles.container}>
            <h1>CV</h1>
            <hr />
            <p> Download a copy of my <a href="/src/assets/Daniel_CV.pdf" target="_blank">curriculum vitae</a></p>
            <div className={Styles.cv_container}>
                <embed src="/src/assets/Daniel_CV.pdf" title="Daniel's CV"></embed>
            </div>
        </div>
    );
};

export default CV;