import {Movie} from '@/app/lib/movie.model';
import styles from '@/styles/ui/movie-card.module.scss';
import classNames from 'classnames';
import {outfit} from '@/app/fonts';
import {redirect} from 'next/navigation';

function MovieCard({size, movie}: {size : 's' | 'm' | 'l', movie: Movie}) {
    let className : string;

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

    return(
        <div
            className={classNames([styles.container], className)}
            onClick={() => redirect(`/movies/${movie.id}/details`)}
        >
            <img
                src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                className={styles.backdrop}
            />
            <div className={styles.infoContainer}>
                <pre className={classNames([styles.info], [outfit.className])}>
                {`${new Date(movie.release_date).getFullYear()}  ·  `}
                    <img src='movie-tape.svg' width='10' height='10'/>
                    {`  Movie`}
            </pre>
                <p className={styles.title}>{movie.title}</p>
            </div>
        </div>
    );
}

export default MovieCard;
