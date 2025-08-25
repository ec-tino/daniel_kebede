import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.container_footer}>
                <div className={styles.footer_item}>
                    <h3>Contact</h3>
                    <div className={styles.contact_info}>
                        <p>Mobile phone: +1 (123)456 7890</p>
                        <p> Email: myemail@gmail.com</p>
                    </div>
                </div>
                <div className={styles.footer_item}>
                    <h3>Address</h3>
                    <p className={styles.address}> 13 Oak Dr, Hamilton NY, 13346</p>
                </div> 
                <div className={styles.container_socials}>
                    <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div>
                <div><p>&copy; {new Date().getFullYear()} Daniel's Portfolio. All rights reserved.</p></div>
            </div>
        </footer>
    );
};

export default Footer;