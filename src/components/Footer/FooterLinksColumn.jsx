import styles from './Footer.module.css';
import FooterLink from './FooterLink';

export default function FooterLinksColumn({ links }) {
  return (
    <div className={styles.footerLinksColumn}>
      {links.map((text, idx) => (
        <FooterLink key={idx} text={text} />
      ))}
    </div>
  );
}