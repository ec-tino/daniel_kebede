import React from 'react';
import styles from './Home.module.css'

const Home = () => {
    return (
        <>  
            {/* <div>
                <div className={styles.spacer}> <h1>Home</h1></div>
            </div> */}
            <div className={styles.container_body}>
                <div className={styles.profile_image_container}>
                    <img src={`${import.meta.env.BASE_URL}Daniel_photo.jpg`} alt="Daniel" className={styles.profile_image} />
                    <h3 className={styles.profile_name}> Daniel Gulti Kebede, Ph.D</h3>
                </div>
                <div className={styles.container_about}>
                    <h1>About me</h1>
                    <p>
                        Welcome! I am a visiting assistant professor at Colgate University department of Economics. 
                        I am broadly interested in applying frontier econometric models to interesting economic 
                        problems. My job market paper analyzes earning dynamics and household consumption 
                        insurance, i.e., the fraction of income shocks households self-insure against.
                    </p>
                    <p>
                        My current research focuses on analyzing income and consumption dynamics and examines 
                        the link between income and consumption inequality. Another interesting exercise is 
                        analyzing how this link varies across different demographic characteristics. 
                        Dimensions of heterogeneity can come in the form of various demographic characteristics 
                        including age, level of education, race, sex, etc.
                    </p>
                    <p>
                        To address questions, I rely on techniques from classical econometrics, structural modeling 
                        and cutting-edge machine learning techniques as needed.
                    </p>
                    <p><b>
                        Fields: Macroeconomics, Econometrics and Machine Learning.
                    </b></p>
                </div>           
            </div>
        </>
    );
};

// src="/src/assets/Daniel_photo.jpg"
export default Home;