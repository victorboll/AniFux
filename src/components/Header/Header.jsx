import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SearchButton from './SearchButton';
import UserAvatar from './UserAvatar';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detectar o scroll e mudar o estado
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Define o ponto que vai adicionar a opacidade
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
    >
      <div className={styles.logoLinksWrapper}>
        <Logo />
        <NavLinks />
      </div>
      <div className={styles.right}>
        <SearchButton />
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
