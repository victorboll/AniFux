import styles from './Footer.module.css';

export default function FooterLink({ text }) {
  return (
    <a href="#" className={styles.footerLink}>
      {text}
    </a>
  );
}
