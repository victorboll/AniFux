import styles from './Footer.module.css';
import FooterLinksColumn from './FooterLinksColumn';

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
        <FooterLinksColumn key={idx} links={group} />
      ))}
    </div>
  );
}
