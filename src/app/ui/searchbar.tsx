'use client';

import styles from '@/styles/searchbar.module.scss';

function Searchbar() {
    return(
        <div className={styles.searchbar}>
            <input
                className={styles.searchField}
                placeholder="Search for movies or TV series"
            />
            <button className={styles.searchBtn}>Search</button>
        </div>
    );
}

export default Searchbar;
