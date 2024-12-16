'use client';

import styles from '../../styles/sidebar.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import {usePathname} from 'next/navigation';
import {useState} from 'react';

function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className={styles.toggleSidebar} onClick={() => setIsOpen(!isOpen)}>
                <img src="burger-menu.svg" width="25" height="25"/>
            </button>
            <div className={classNames([styles.sidebar], isOpen && styles.opened)}>
                <Link href={'/'} className={classNames({active: pathname === '/'})}>
                    <img src="movie-cut.svg" width="40" height="40"/>
                </Link>
                <div className={styles.navLinksContainer}>
                    <Link href={'/bookmarks'}
                          className={classNames([styles.navLink], {[styles.active]: pathname === '/bookmarks'})}>
                        <img src="bookmarks.svg" width="33" height="33"/>
                    </Link>
                    <Link href="/movies"
                          className={classNames([styles.navLink], {[styles.active]: pathname === '/movies'})}>
                        <img src="movie-tape.svg" width="25" height="25"/>
                    </Link>
                    <Link href={'/series'}
                          className={classNames([styles.navLink], {[styles.active]: pathname === '/series'})}>
                        <img src="tv.svg" width="28" height="28"/>
                    </Link>
                </div>
                <Link href={'/profile'}>
                    {/*profile avatar*/}
                </Link>
            </div>

            {isOpen && <div className={styles.overlay}></div>}
        </>
    );
}

export default Sidebar;
