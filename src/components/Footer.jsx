import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Daniel Portfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;