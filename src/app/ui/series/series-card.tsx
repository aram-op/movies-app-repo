import styles from '@/styles/ui/shared/movie-card.module.scss';
import classNames from 'classnames';
import {outfit} from '@/app/fonts';
import {useRouter} from 'next/navigation';
import {Series} from '@/app/lib/series.model';

function SeriesCard({size, item}: { size: 's' | 'm' | 'l', item: Series }) {
    const {push} = useRouter();
    let className: string;

    switch (size) {
        case 's':
            className = styles.s;
            break;
        case 'm':
            className = styles.m;
            break;
        case 'l':
            className = styles.l;
            break;
    }

    return (
        <div
            className={classNames([styles.container], className)}
            onClick={() => push(`/series/${item.id}/details`)}
        >
            <img
                src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
                className={styles.backdrop}
            />
            <div className={styles.infoContainer}>
                <pre className={classNames([styles.info], [outfit.className])}>
                {`${new Date(item.first_air_date).getFullYear()}  ·  `}
                    <img src="/tv.svg" width="12" height="12"/>
                    {`  TV Series`}
            </pre>
                <p className={styles.title}>{item.name}</p>
            </div>
        </div>
    );
}

export default SeriesCard;
