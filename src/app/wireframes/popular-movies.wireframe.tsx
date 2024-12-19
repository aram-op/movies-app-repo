import styles from '@/styles/ui/shared/movies-flex.module.scss';
import SectionHeadingWireframe from '@/app/wireframes/section-heading.wireframe';
import MovieCardWireframe from '@/app/wireframes/movie-card.wireframe';

function PopularMoviesWireframe() {
    const movies = [];

    for(let i = 0; i < 10; i++) {
        movies.push(<MovieCardWireframe size={'m'} key={i}/>);
    }

    return (
        <div className={styles.container}>
            <SectionHeadingWireframe/>
            <div className={styles.moviesContainer}>
                {movies}
            </div>
        </div>
    );
}

export default PopularMoviesWireframe;