import styles from "./Header.module.css"

function  Header (){
    return(
        // Conteúdo a ser exibido
        // O conteúdo será um JSX ==> Que é um html + xml
        <header className={styles.header}>
            <span>ReactFlix</span>
            <nav>
                <a href="">Home</a>
                <a href="">Assistir</a>
            </nav>
        </header>
    )
}
export default Header; //A comunidade de React usa ";"