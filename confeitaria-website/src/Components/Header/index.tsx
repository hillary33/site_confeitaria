import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_1280.jpg" alt="imagem sobremesa" />
            </div>
            
        </div>
    )
}