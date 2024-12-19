import styles from '@/styles/ui/shared/genre-tile.module.scss';
import {Genre} from '@/app/lib/genre.model';

function GenreTile({genre, isMovie}: { genre: Genre, isMovie: boolean }) {

    function handleClick() {
        if (isMovie) {
            window.location.href = `/movies/genre/${genre.id}`;
            return;
        }
        window.location.href = `series/genre/${genre.id}`;
    }

    return (
        <button className={styles.genre} onClick={handleClick}>
            <span className={styles.name}>{genre.name}</span>
        </button>
    );
}

export default GenreTile;
