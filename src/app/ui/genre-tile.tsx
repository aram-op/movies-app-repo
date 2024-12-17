'use client';

import styles from '@/styles/ui/genre-tile.module.scss';
import {Genre} from '@/app/lib/genre.model';
import {redirect} from 'next/navigation';

function GenreTile({genre, isMovie}: { genre: Genre, isMovie: boolean }) {
    function handleClick() {
        if (isMovie) {
            redirect(`/movies/genre/${genre.id}`);
        }
        redirect(`series/genre/${genre.id}`);
    }

    return (
        <button className={styles.genre} onClick={handleClick}>
            <span className={styles.name}>{genre.name}</span>
        </button>
    );
}

export default GenreTile;
