import React from 'react';
import styles from './Header.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.logoA}>A</span>
      <span className={styles.logoX}>X</span>
    </div>
  );
};

export default Logo;