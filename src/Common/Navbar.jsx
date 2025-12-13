import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  Folder,
  FileText,
  Menu,
  X
} from "lucide-react";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>

        
        <div className={styles.logo}>Asnia.M</div>

        
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/" className={styles.navItem}>
              <Home size={18} />
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={styles.navItem}>
              <User size={18} />
              <span>About</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className={styles.navItem}>
              <Folder size={18} />
              <span>Projects</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/resume" className={styles.navItem}>
              <FileText size={18} />
              <span>Resume</span>
            </NavLink>
          </li>
        </ul>

        
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      
      <div className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
        <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
        <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink>
        <NavLink onClick={() => setOpen(false)} to="/projects">Projects</NavLink>
        <NavLink onClick={() => setOpen(false)} to="/resume">Resume</NavLink>
      </div>
    </nav>
  );
}
