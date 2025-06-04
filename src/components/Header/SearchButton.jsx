import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';

const SearchButton = () => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  const handleToggle = () => {
    setShowInput(prev => !prev);
  };

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const handleBlur = () => {
    setShowInput(false);
  };

  return (
    <div className={styles.searchWrapper}>
      {showInput && (
        <input
          ref={inputRef}
          type="text"
          placeholder="Pesquisar..."
          className={styles.searchInput}
          onBlur={handleBlur}
        />
      )}
      <button onClick={handleToggle} className={styles.searchButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
          <path d="M10 2a8 8 0 105.293 14.293l5.707 5.707 1.414-1.414-5.707-5.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/>
        </svg>
      </button>
    </div>
  );
};

export default SearchButton;
