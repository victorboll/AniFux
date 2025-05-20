import styles from './Footer.module.css';

export default function FooterSocialIcons() {
  return (
    <div className={styles.footerSocialIcons}>
      <a href="#"><i className="fab fa-facebook-f"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-youtube"></i></a>
    </div>
  );
}
