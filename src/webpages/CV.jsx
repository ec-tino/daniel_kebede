import React from 'react';
import Styles from './CV.module.css'

const CV = () => {
    return (
        <>
            <div>
                <div className={Styles.spacer}> <h1>Curriculum Vitae</h1></div>
            </div> 
            <div className={Styles.container}>
                <p>
                    Download a copy of my{' '}
                    <a
                        href="/src/assets/Daniel_CV.pdf"
                        target="_blank"
                        className={Styles.cvLink}
                    >
                        CV
                    </a>
                </p>
                <div className={Styles.cv_container}>
                    <embed src="/src/assets/Daniel_CV.pdf" title="Daniel's CV"></embed>
                </div>
            </div>
        </>
    );
};

export default CV;