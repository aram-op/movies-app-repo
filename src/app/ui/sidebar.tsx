'use client';

import styles from '../../styles/ui/sidebar.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';

function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
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

    return (
        <>
            {windowWidth < 700 && <button className={styles.toggleSidebar} onClick={() => setIsOpen(!isOpen)}>
                <img src="/burger-menu.svg" width="25" height="25"/>
            </button>}
            <div className={classNames([styles.sidebar], isOpen && styles.opened)}>
                <Link href={'/'} className={classNames({active: pathname === '/'})}>
                    <img src="/movie-cut.svg" width="40" height="40"/>
                </Link>
                <div className={styles.navLinksContainer}>
                    <Link href={'/bookmarks'}
                          className={classNames([styles.navLink], {[styles.active]: pathname === '/bookmarks'})}>
                        <img src="/bookmarks.svg" width="33" height="33" className={styles.logo}/>
                    </Link>
                    <Link href="/movies"
                          className={classNames([styles.navLink], {[styles.active]: pathname === '/movies'})}>
                        <img src="/movie-tape.svg" width="25" height="25" className={styles.logo}/>
                    </Link>
                    <Link href={'/series'}
                          className={classNames([styles.navLink], {[styles.active]: pathname === '/series'})}>
                        <img src="/tv.svg" width="28" height="28" className={styles.logo}/>
                    </Link>
                </div>
                <Link href={'/profile'}>
                    {/*profile avatar*/}
                </Link>
            </div>

            {(isOpen && windowWidth < 700) && <div className={styles.overlay}></div>}
        </>
    );
}

export default Sidebar;
