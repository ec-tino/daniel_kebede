import React from 'react';
import Styles from './Research.module.css'

const Research = () => {
    return (
        <div className={Styles.container}>
            <h1>Research</h1>
            <hr /> 
            <div className={Styles.research_card}>
                <div className={Styles.card_image}>
                    <img src="/src/assets/react.svg" alt="Card Visual" />
                </div>
                <div className={Styles.card_content}>
                    <h2 className={Styles.card_title}>Modeling Earning Process and Analyzing 
                        Household Consumption Insurance (Job Market Paper)</h2>
                    <p className={Styles.card_description}>
                    The study of income and consumption linkage and analysis of permanent and 
                    transitory income shocks is limited by model misspecification and availability of data. 
                    The misspecification arises from ignoring unemployment risk while estimating income shocks. 
                    I employ Heckman two step regression model to consistently estimate income shocks. 
                    Moreover, to deal with data sparsity, I propose identifying the partial consumption 
                    insurance and income and consumption volatility heterogeneities at the household level using 
                    Least Absolute shrinkage and Selection Operator (LASSO). Using PSID data, I estimate partial 
                    consumption insurance against permanent shock of 63% and 49% for white and black household heads, 
                    respectively; the white and black household heads self-insure against 100% and 90% of the 
                    transitory income shocks, respectively. Moreover, I find income and consumption volatilities 
                    and partial consumption insurance parameters vary across time.
                    </p>
                    <a href="#" target="_blank" rel="noopener noreferrer"><p className={Styles.card_link}> Access Presentation Files</p></a>
                </div>
            </div>
            
            <div className={Styles.research_card}>
                <div className={Styles.card_image}>
                    <img src="/src/assets/react.svg" alt="Card Visual" />
                </div>
                <div className={Styles.card_content}>
                    <h2 className={Styles.card_title}>Testing Smooth Structural Breaks in Predictive Regression</h2>
                    <p className={Styles.card_description}>
                        I consider smooth structural break test proposed by Chen and Hong (2012), 
                        in a predictive regression setting. The regressors are characterized using the 
                        local to non-stationarity framework. I conduct a Monte Carlo experiment to evaluate the 
                        finite sample performance of the test statistic and examine an empirical example to 
                        demonstrate its practical application. The Monte Carlo simulations show that the test 
                        statistic has better power and size compared to the popular SupF and LM. Empirically, 
                        compared to SupF and LM, the test statistic rejects the null hypothesis of no structural 
                        break more frequently when there actually is a structural break present in the data.
                    </p>
                    <a href="#" target="_blank" rel="noopener noreferrer"><p className={Styles.card_link}> Access Presentation Files</p></a>
                </div>                
            </div>
            <div className={Styles.research_card}></div>
        </div>
    );
};

export default Research;