import React from 'react';
import Styles from './Research.module.css'

const Research = () => {
    return (
        <>
            <div>
                <div className={Styles.spacer}> <h1>Research</h1></div>
            </div> 
        <div className={Styles.container}>
            <div className={Styles.research_card}>
                <div className={Styles.card_image}>
                    <img src="/research1.png" alt="Card Visual" />
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
                    {/* <a href="#" target="_blank" rel="noopener noreferrer"><p className={Styles.card_link}> Access Presentation Files</p></a> */}
                </div>
            </div>
            
            <div className={Styles.research_card}>
                <div className={Styles.card_image}>
                    <img src="/research2.png" alt="Card Visual" />
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
                    <a href="/Smooth_Structural_Break_Test.pdf" target="_blank" rel="noopener noreferrer"><p className={Styles.card_link}> Access Presentation Files</p></a>
                </div>                
            </div>
            <div className={Styles.research_card}>
                <div className={Styles.card_image}>
                    <img src="/research3.png" alt="Card Visual" />
                </div>
                <div className={Styles.card_content}>
                    <h2 className={Styles.card_title}>Microeconomic Sources of Productivity Growth Across Japanese 
                        Cities ( with Mario J Crucini, Purdue University )</h2>
                    <p className={Styles.card_description}>
                        The combination of perfect competition and Cobb-Douglas production equates aggregate labor productivity with the real wage. 
                        This paper uses micro-data to decompose total labor productivity into the contributions of individual goods and services. 
                        Prices that rise at more than the average rate produce tail winds in labor productivity growth while those that fall spur advances. 
                        This concept is applied to approximately 114 retail goods and services sold across 68 cities in Japan over the period from 1961 to 2018.
                    </p>
                    {/* <a href="#" target="_blank" rel="noopener noreferrer"><p className={Styles.card_link}> Access Presentation Files</p></a> */}
                </div>                
            </div>   
            <div className={Styles.research_card}>
                <div className={Styles.card_image}>
                    <img src="/research4.png" alt="Card Visual" />
                </div>
                <div className={Styles.card_content}>
                    <h2 className={Styles.card_title}>Do Incentives Matter? Evidence from COVID 19 Vaccine Rollout 
                        ( with James C. Reeder, University of Kansas )</h2>
                    <p className={Styles.card_description}>
                        Governmental agencies and non-governmental organizations have often relied on marketing techniques to drive compliance of their constituency. 
                        For example, the US government has recently pledged to spend $50 million in advertising to promote the HealthCare.gov website. 
                        Our study explores a different marketing tool that governments recently adopted during the COVID-19 pandemic, promotions. 
                        While promotions, both price and non-price promotions, have long been used by businesses to drive sales, this is a relatively new lever used 
                        in public policy at such a scale. During the COVID-19 pandemic, local governmental agencies were forced to grapple with how to increase 
                        vaccination rates among the population. Our study is the first to examine if the use of promotions actually increased the rates of vaccinations within 
                        the United States. Using a novel set of data, recasting the bass diffusion framework, and leveraging new techniques to assess treatment effects in panel 
                        data we estimate not only the direct effect of promotions on vaccination, but if regional heterogeneity plays a role in its efficacy. Our preliminary 
                        findings suggest that the use of promotions does increase the rate at which people get vaccinated. However, this effect is moderated by the size of the 
                        population that is vaccine hesitant and political affiliation.
                    </p>
                    <a href="/public_policy_diffusion.pdf" target="_blank" rel="noopener noreferrer"><p className={Styles.card_link}> View article</p></a>
                </div>                
            </div>                         
        </div>
        </>
    );
};
// src="/src/assets/research4.png"
export default Research;