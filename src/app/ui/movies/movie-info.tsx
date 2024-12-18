import {Movie} from '@/app/lib/movie.model';
import styles from '@/styles/ui/movies/movie-info.module.scss';

function MovieInfo({details} : {details: Movie}) {
    return (
        <div className={styles.container}>
            <p className={styles.colName}>Length</p>
            <p className={styles.colName}>Language</p>
            <p className={styles.info}>{`${details.runtime} min.`}</p>
            <p className={styles.info}>{details.spoken_languages![0].english_name}</p>
            <p className={styles.colName}>Year</p>
            <p className={styles.colName}>Status</p>
            <p className={styles.info}>{new Date(details.release_date).getFullYear()}</p>
            <p className={styles.info}>{details.status}</p>
        </div>
    );
}

export default MovieInfo;
