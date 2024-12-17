import styles from '@/styles/ui/star-rating.module.scss';
import classNames from 'classnames';
import {outfit} from '@/app/fonts';

function StarRating({rating}: { rating: number }) {
    const width = rating * 10;

    return (
        <div className={classNames([styles.starRating], outfit.className)}>
            <div className={styles.starsOutlined}>
                {[...Array(5)].map((_, i) => <img src="/star.svg" key={i} className={styles.icon}/>)}
            </div>

            <div className={styles.starsFilled} style={{width: `${width}%`}}>
                {[...Array(5)].map((_, i) => <img src="/star-filled.svg" key={i} className={styles.icon}/>)}
            </div>
        </div>
    );
}

export default StarRating;