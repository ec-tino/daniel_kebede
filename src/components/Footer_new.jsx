import React from 'react';

const Footer_new = () => {
    return (
        <>
            <style>{`
            /* --- Footer Styles --- */
        footer {
          background-color: #212529; /* A very dark, professional color */
          color: #f8f9fa;
          padding: 3rem 2rem;
          margin-top: 3rem;
        }

        .container_footer {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .footer_item {
            flex: 1;
            min-width: 220px;
        }

        .footer_item h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: #ffffff;
            font-weight: 600;
            border-bottom: 1px solid #495057;
            padding-bottom: 0.5rem;
        }

        .footer_item p {
            margin: 0.5rem 0;
            color: #ced4da;
        }

        .container_socials {
            display: flex;
            gap: 1.25rem;
            align-items: center;
            min-width: 150px;
            justify-content: center; /* Center align icons horizontally */
            margin-top: 0.5rem; /* Reduced from 2rem to 0.5rem */
        }

        .container_socials a {
            color: #f8f9fa;
            font-size: 1.6rem;
            transition: color 0.3s ease, transform 0.3s ease;
        }

        .container_socials a:hover {
            color: #89cff0;
            transform: translateY(-2px);
        }

        .copyright_container {
            width: 100%;
            text-align: center;
            margin-top: 2.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid #495057;
            color: #adb5bd;
            font-size: 0.9rem;
        }


        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }
            .container_footer {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .container_socials {
                justify-content: center;
            }
        }`}

            </style>
            <footer>
                <div className="container_footer">
                    <div className="footer_item">
                        <h3>Contact</h3>
                        <div className="contact_info">
                            <p>Mobile phone: +1 (123)456 7890</p>
                            <p>Email: myemail@gmail.com</p>
                        </div>
                    </div>
                    <div className="footer_item">
                        <h3>Address</h3>
                        <p className="address">13 Oak Dr, Hamilton NY, 13346</p>
                    </div> 
                    <div className="footer_item">
                        <h3>Follow Me</h3>
                        <div className="container_socials">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a> 
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="copyright_container">
                    <p>&copy; {new Date().getFullYear()} Daniel's Portfolio. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer_new;