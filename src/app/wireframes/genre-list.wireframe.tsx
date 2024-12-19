import styles from '@/styles/ui/shared/genre-list.module.scss';
import GenreTileWireframe from '@/app/wireframes/genre-tile.wireframe';

function GenreListWireframe() {
    return(
        <div className={styles.container}>
            {[...Array(16)].map((_, i) => <GenreTileWireframe key={i}/>)}
        </div>
    );
}

export default GenreListWireframe;
