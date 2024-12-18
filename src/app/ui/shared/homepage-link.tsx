import styles from '@/styles/ui/shared/homepage-link.module.scss';
import classNames from 'classnames';
import {outfit} from '@/app/fonts';

function HomepageLink({href} : {href: string}) {
    return(
        <button className={styles.button}>
            <a
                className={styles.link}
                href={href}
            >
                <span className={classNames([styles.label], outfit.className)}>Website</span>
                <img src={'/link-chain.svg'} className={styles.icon}/>
            </a>
        </button>
    );
}

export default HomepageLink;
