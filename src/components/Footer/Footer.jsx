/*import styles from "./Footer.module.css"

function  Footer (){
    return(
        // Conteúdo a ser exibido
        // O conteúdo será um JSX ==> Que é um html + xml
        <footer className={styles.footer}>
            <h2>ReactFlix Desenvolvido por XYZ</h2>
        </footer>
    )
}
export default Footer; //A comunidade de React usa ";"*/
import styles from './Footer.module.css';
import FooterLinksGroup from './FooterLinksGroup';
import FooterSocialIcons from './FooterSocialIcons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinksContainer}>
        <FooterLinksGroup />
      </div>
      <FooterSocialIcons />
    </footer>
  );
}