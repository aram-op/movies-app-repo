'use client';

import styles from '@/styles/ui/header.module.scss';
import Searchbar from '@/app/ui/searchbar';
import {useEffect, useState} from 'react';

function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window?.innerWidth);
        };

        window?.addEventListener('resize', handleResize);

        return () => {
            window?.removeEventListener('resize', handleResize);
        };
    }, []);

    let searchbarLayout = <>
        <button className={styles.searchButton} onClick={() => setIsSearchOpen(true)}>
            <img src="/search.svg" width="25" height="25"/>
            Search...
        </button>
        {isSearchOpen && <div className={styles.searchContainer}>
            <Searchbar/>
            <button className={styles.closeSearch} onClick={() => setIsSearchOpen(false)}>
                <img src="/cancel.svg" width="18" height="18"/>
            </button>
        </div>}
    </>;
    let themeButtonsSize = 20;

    if(windowWidth >= 700) {
        searchbarLayout = <>
            <img src="/search.svg" width="30" height="30"/>
            <Searchbar/>
        </>
        themeButtonsSize = 25;
    }

    return (
        <header className={styles.header}>
            {searchbarLayout}
            <div className={styles.themeToggleContainer}>
                <button className={styles.themeButton}>
                <img src="/sun.svg" width={themeButtonsSize} height={themeButtonsSize}/>
                </button>
                <img src="/divider.svg" width={themeButtonsSize} height={themeButtonsSize}/>
                <button className={styles.themeButton}>
                    <img src="/moon.svg" width={themeButtonsSize} height={themeButtonsSize}/>
                </button>
            </div>
        </header>
    );
}

export default Header;
