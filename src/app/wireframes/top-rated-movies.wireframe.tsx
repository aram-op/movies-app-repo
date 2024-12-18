import styles from '@/styles/ui/movies/trending-movies.module.scss';
import SectionHeadingWireframe from '@/app/wireframes/section-heading.wireframe';
import MovieCardWireframe from '@/app/wireframes/movie-card.wireframe';

function TopRatedMoviesWireframe() {
    const movies = [];

    for(let i = 0; i < 10; i++) {
        movies.push(<MovieCardWireframe size={'l'} key={i}/>);
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

export default TopRatedMoviesWireframe;