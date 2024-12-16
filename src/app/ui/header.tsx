'use client';

import styles from '@/styles/header.module.scss';
import Searchbar from '@/app/ui/searchbar';
import {useState} from 'react';

function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className={styles.header}>
            <button className={styles.searchButton} onClick={() => setIsSearchOpen(true)}>
                <img src="search.svg" width="25" height="25"/>
                Search...
            </button>
            {isSearchOpen && <div className={styles.searchContainer}>
                <Searchbar/>
                <button className={styles.closeSearch} onClick={() => setIsSearchOpen(false)}>
                    <img src="cancel.svg" width="18" height="18"/>
                </button>
            </div>}
            <div className={styles.themeToggleContainer}>
                <button className={styles.themeButton}>
                <img src="sun.svg" width="20" height="20"/>
                </button>
                <img src="divider.svg" width="20" height="20"/>
                <button className={styles.themeButton}>
                    <img src="moon.svg" width="20" height="20"/>
                </button>
            </div>
        </header>
    );
}

export default Header;
