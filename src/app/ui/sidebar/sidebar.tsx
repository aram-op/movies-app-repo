'use client';

import styles from './sidebar.module.css';
import Link from 'next/link';
import classNames from 'classnames';
import {usePathname} from 'next/navigation';

function Sidebar() {
    const pathname = usePathname();

    return (
        <div className={styles.sidebar}>
            <Link href={'/'} className={classNames({active: pathname === '/'})}>
                <img src="movie-cut.svg" width="40" height="40"/>
            </Link>
            <div className={styles.navLinksContainer}>
                <Link href={'/bookmarks'} className={classNames([styles.navLink],{[styles.active]: pathname === '/bookmarks'})}>
                    <img src="bookmarks.svg" width="33" height="33"/>
                </Link>
                <Link href="/movies" className={classNames([styles.navLink],{[styles.active]: pathname === '/movies'})}>
                    <img src="movie-tape.svg" width="25" height="25"/>
                </Link>
                <Link href={'/series'} className={classNames([styles.navLink],{[styles.active]: pathname === '/series'})}>
                    <img src="tv.svg" width="28" height="28"/>
                </Link>
            </div>
            <Link href={'/profile'}>
                {/*profile avatar*/}
            </Link>
        </div>
    );
}

export default Sidebar;
