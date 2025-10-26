import React from 'react';

// --- Teaching Page Component ---
const Teaching = () => {
  // Data for the teaching page is now self-contained within the component
  const teachingData = {
      colgate: {
        university: 'Colgate University',
        location: 'Hamilton, NY',
        experiences: [
           { description: 'Instructor for ECON 375, Applied Econometrics', term: 'Spring 2025' },
           { description: 'Instructor for ECON 252, Intermediate Microeconomics', term: 'Spring 2024 & 2025' },
           { description: 'Instructor for ECON 375, Applied Econometrics', term: 'Fall 2024' },
           { description: 'Instructor for ECON 252, Intermediate Microeconomics', term: 'Fall 2023 & 2024' }
        ]
      },
      purdue: {
        university: 'Purdue University',
        location: 'West Lafayette, IN',
        experiences: [
            { description: 'Instructor for ECON 360, Econometrics (Eval.)', term: 'Summer 2022' },
            { description: 'Teaching Assistant for ECON 490, Honors Thesis', term: 'Spring 2022' },
            { description: 'Teaching Assistant for ECON 380, Money and Banking', term: 'Spring 2022' },
            { description: 'Teaching Assistant for ECON 612, Macroeconomic Theory III (PhD Level Course)', term: 'Spring 2022' },
            { description: 'Instructor for ECON 360, Econometrics (Eval.)', term: 'Summer 2021' },
            { description: 'Teaching Assistant for ECON 674, Micro-econometrics (PhD Level Course)', term: 'Spring 2021' },
            { description: 'Teaching Assistant for ECON 590, Mathematics for Economists', term: 'Fall 2020' },
            { description: 'Teaching Assistant for ECON 590, Probability and Statistics', term: 'Fall 2020' },
            { description: 'Teaching Assistant for ECON 380, Labor Economics', term: 'Fall 2019' },
            { description: 'Instructor for ECON 251, Macroeconomics', term: 'Summer 2019' },
            { description: 'Teaching Assistant for ECON 615, Mathematical Economics (PhD Level Course)', term: 'Fall 2018' },
            { description: 'Recitation for ECON 210, Principles of Economics (Eval.)', term: 'Fall 2017' }
        ]
      },
      columbia: {
        university: 'Columbia University',
        location: 'New York City, NY',
        experiences: [
           { description: 'Quantitative Method II', term: 'Spring 2016' },
           { description: 'Quantitative Method I', term: 'Fall 2015' }
        ]
      }
  };

    return (
        <>
        <div>
            <div className="spacer"> <h1>Teaching</h1></div>
         </div> 
        <div className="teaching-page-container">
            <style>{`
            .spacer {
                background-color: rgb(58, 48, 80);
                height: 80px;
                padding: 10px;
                justify-content: center;
                color: white;
            }

            .teaching-page-container {
          max-width: 900px;
          margin: 2rem auto;
          padding: 2rem;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        .teaching-page-container h1 {
          text-align: center;
          margin-bottom: 2.5rem;
          color: #212529;
          font-size: 2.5rem;
        }
        .university-section {
          margin-bottom: 3rem;
        }
        .university-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          border-bottom: 2px solid #dee2e6;
          padding-bottom: 0.75rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .university-header h2 {
          font-size: 1.8rem;
          color: #0056b3;
          margin: 0;
        }
        .university-header .location {
          font-size: 1.1rem;
          color: #6c757d;
          font-style: italic;
        }
        .experience-list {
          list-style: none;
          padding-left: 0;
        }
        .experience-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid #e9ecef;
          transition: background-color 0.2s ease;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .experience-item:last-child {
          border-bottom: none;
        }
        .experience-item:hover {
          background-color: #f8f9fa;
        }
        .experience-item .description {
          flex-grow: 1;
          color: #343a40;
          text-align: left;
        }
        .experience-item .term {
          flex-shrink: 0;
          text-align: right;
          color: #495057;
          font-weight: 500;
          min-width: 120px;
        }

        @media (max-width: 768px) {
            .teaching-page-container h1 {
                font-size: 2rem;
            }
        }
        
        @media (max-width: 600px) {
          .experience-item {
            align-items: flex-start;
          }
          .experience-item .term {
            text-align: left;
            width: 100%;
          }
          .university-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }`
        }</style>
            {Object.values(teachingData).map(uni => (
                <section key={uni.university} className="university-section">
                    <div className="university-header">
                        <h2>{uni.university}</h2>
                        <span className="location">{uni.location}</span>
                    </div>
                    <ul className="experience-list">
                        {uni.experiences.map((exp, index) => (
                            <li key={index} className="experience-item">
                                <span className="description">{exp.description}</span>
                                <span className="term">{exp.term}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
        </>
    );
};
export default Teaching;