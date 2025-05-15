import styles from './Home.module.css';

import Header from "../../Components/Header"

export default function Home() {
    return (
        <div>
        <Header />
            <div className={styles.contentBox}>
                    <h2 className={styles.titulo}>O QUE OFERECEMOS</h2>
                    <p className={styles.paragrafo}>Bolos de diversos sabores, com a decoração do jeito que você desejar! Oferecemos também doces deliciosos para adoçar seu evento. Se você está planejando uma festa, temos a decoração perfeita para tornar sua celebração inesquecível. Cada detalhe é feito com carinho e dedicação, garantindo qualidade e satisfação. Venha conferir nossas opções e faça sua encomenda conosco!</p>
            </div>
            <div className={styles.contentImage}>
                
            </div>
        </div>
    );
}