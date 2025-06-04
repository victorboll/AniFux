import React from 'react';
import styles from './Header.module.css';

const NavLinks = () => {
  const links = ['HOME', 'SERIES', 'MOVIES', 'ORIGINALS', 'MORE'];

  return (
    <ul className={styles.links}>
      {links.map(link => (
        <li key={link} className={styles.linkItem}>{link}</li>
      ))}
    </ul>
  );
};

export default NavLinks;