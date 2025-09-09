import React from 'react';
import Styles from './Teaching.module.css'

const Teaching = () => {
    return (
        <div className={Styles.teaching_container}>
            <h1>Teaching Experience</h1>
            <hr />
            <div className={Styles.teaching_timeline}>
                <h2>Purdue University, <span className={Styles.location}>West Lafayette, IN</span></h2> 
                <div className={Styles.timeline_item}>
                    <div className={Styles.timeline_date}>Summer 2022</div>
                    <div className={Styles.timeline_content}>
                        <p><strong>Instructor</strong> for ECON 360, Econometrics (Eval.) </p>
                    </div>
                </div>

                <div className={Styles.timeline_item}>
                    <div className={Styles.timeline_date}>Spring 2022</div>
                    <div className={Styles.timeline_content}>
                        <p><strong>Teaching Assistant</strong> for ECON 490, Honors Thesis</p>
                        <p><strong>Teaching Assistant</strong> for ECON 380, Money and Banking</p>
                        <p><strong>Teaching Assistant</strong> for ECON 612, Macroeconomic Theory III (PhD Level Course)</p>
                    </div>
                </div>

                <div className={Styles.timeline_item}>
                    <div className={Styles.timeline_date}>Summer 2021</div>
                    <div className={Styles.timeline_content}>
                        <p><strong>Instructor</strong>  for ECON 360, Econometrics (Eval.)</p>
                    </div>
                </div>

                <div className={Styles.timeline_item}>
                    <div className={Styles.timeline_date}>Spring 2021</div>
                    <div className={Styles.timeline_content}>
                        <p><strong>Teaching Assistant</strong> for ECON 674, Micro-econometrics (PhD Level Course)</p>
                    </div>
                </div>

                <div className={Styles.timeline_item}>
                    <div className={Styles.timeline_date}>Fall 2020</div>
                    <div className={Styles.timeline_content}>
                        <p><strong>Teaching Assistant</strong> for ECON 590, Mathematics for Economists</p>
                        <p><strong>Teaching Assistant</strong> for ECON 590, Probability and Statistics</p>
                    </div>
                </div>

                <div className={Styles.timeline_item}>
                    <div className={Styles.timeline_date}>Fall 2019</div>
                    <div className={Styles.timeline_content}>
                        <p><strong>Teaching Assistant</strong> for ECON 380, Labor Economics</p>
                    </div>
                </div>

                <div className={Styles.timeline_item}>
                    <div className={Styles.timeline_date}>Summer 2019</div>
                    <div className={Styles.timeline_content}>
                        <p><strong>Instructor</strong> for ECON 251, Macroeconomics</p>
                    </div>
                </div>

                <div className={Styles.timeline_item}>
                    <div className={Styles.timeline_date}>Fall 2018</div>
                    <div className={Styles.timeline_content}>
                        <p><strong>Teaching Assistant</strong> for ECON 615, Mathematical Economics (PhD Level Course)</p>
                    </div>
                </div>

                <div className={Styles.timeline_item}>
                    <div className={Styles.timeline_date}>Fall 2017</div>
                    <div className={Styles.timeline_content}>
                        <p><strong>Recitation</strong> for ECON 210, Principles of Economics(Eval.)</p>
                    </div>
                </div>
            </div>

            {/* NEW SCHOOL */}
            <div className={Styles.teaching_timeline}>
                <h2>Columbia University, <span className={Styles.location}>New York City, NY</span></h2> 
                <div className={Styles.timeline_item}>
                    <div className={Styles.timeline_date}>Spring 2016</div>
                    <div className={Styles.timeline_content}>
                        <p>Quantitative Method II </p>
                    </div>
                </div>
                <div className={Styles.timeline_item}>
                    <div className={Styles.timeline_date}>Fall 2015</div>
                    <div className={Styles.timeline_content}>
                        <p>Quantitative Method I </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teaching;