import styles from '@/styles/ui/shared/results-grid.module.scss';
import MovieCardWireframe from '@/app/wireframes/movie-card.wireframe';

function MovieGridWireframe() {
    return(
        <div className={styles.container}>
            {[...Array(20)].map((_, i) => <MovieCardWireframe size={'m'} key={i}/>)}
        </div>
    );
}

export default MovieGridWireframe;