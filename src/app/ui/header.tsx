import styles from '@/styles/header.module.scss';
import Searchbar from '@/app/ui/searchbar';

function Header() {
    return(
        <header className={styles.header}>
            <Searchbar/>
            <div className={styles.themeToggleContainer}>
                <button className={styles.themeButton}>
                    <img src='sun.svg' width='30' height='30'/>
                </button>
                <img src="divider.svg" width='30' height='30'/>
                <button className={styles.themeButton}>
                    <img src='moon.svg' width='30' height='30'/>
                </button>
            </div>
        </header>
    );
}

export default Header;
