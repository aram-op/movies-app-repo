import styles from '@/styles/ui/shared/info.module.scss';
import {Series} from '@/app/lib/series.model';

function SeriesInfo({details} : {details: Series}) {
    return (
        <div className={styles.container}>
            <p className={styles.colName}>Language</p>
            <p className={styles.colName}>First Air</p>
            <p className={styles.info}>{details.spoken_languages![0].english_name}</p>
            <p className={styles.info}>{details.first_air_date}</p>
            <p className={styles.colName}>Last Air</p>
            <p className={styles.colName}>Status</p>
            <p className={styles.info}>{details.last_air_date}</p>
            <p className={styles.info}>{details.status}</p>
        </div>
    );
}

export default SeriesInfo;
