import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.nav_logo}>Daniel Kebede</div>

      {/* Nav Links */}
      <div
        ref={navRef}
        className={`${styles.nav_links} ${menuOpen ? styles.show : ""}`}
      >
        <div className={styles.close_btn} onClick={() => setMenuOpen(false)}>
          &times;
        </div>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <hr />
        <Link to="/research" onClick={() => setMenuOpen(false)}>
          Research
        </Link>
        <hr />
        <Link to="/teaching" onClick={() => setMenuOpen(false)}>
          Teaching
        </Link>
        <hr />
        <Link to="/cv" onClick={() => setMenuOpen(false)}>
          CV
        </Link>
        <hr />
        <Link to="/blog" onClick={() => setMenuOpen(false)}>
          Blog
        </Link>
      </div>

      {/* Toggle Button */}
      <div
        ref={toggleRef}
        className={styles.toggle_btn}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
