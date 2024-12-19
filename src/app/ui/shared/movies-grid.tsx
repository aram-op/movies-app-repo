import {Movie} from '@/app/lib/movie.model';
import styles from '@/styles/ui/shared/results-grid.module.scss';
import MovieCard from '@/app/ui/shared/movie-card';

function MoviesGrid({movies} : {movies: Movie[]}) {
    return (
        <div className={styles.container}>
            {movies.map(movie => <MovieCard size={'m'} key={movie.id} movie={movie}/>)}
        </div>
    );
}

export default MoviesGrid;
