import styles from './Footer.module.css';
import FooterLink from './FooterLink';

const groups = [
  ["Audio Description", "Investor Relations", "Privacy", "Contact Us"],
  ["Help Center", "Jobs", "Legal Notices", "Do Not Sell or Share My Personal Information"],
  ["Gift Cards", "Netflix Shop", "Cookie Preferences", "Ad Choices"],
  ["Media Center", "Terms of Use", "Corporate Information"]
];

export default function FooterLinksGroup() {
  return (
    <div className={styles.footerLinksGroup}>
      {groups.map((group, idx) => (
        <div key={idx} className={styles.footerLinksColumn}>
          {group.map((text, index) => (
            <FooterLink key={index} text={text} />
          ))}
        </div>
      ))}
    </div>
  );
}
//Criar um componente para a coluna de links