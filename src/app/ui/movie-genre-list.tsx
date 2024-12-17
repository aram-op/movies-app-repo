'use client';

import styles from '@/styles/ui/movie-genre-list.module.scss';
import {useEffect, useState} from 'react';
import {Genre} from '@/app/lib/genre.model';
import {fetchMovieGenres} from '@/app/lib/data';
import GenreTile from '@/app/ui/genre-tile';

function MovieGenreList() {
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        fetchMovieGenres()
            .then((res) => setGenres(res.genres))
            .catch(e => {
                throw e
            });
    }, []);

    return (
        <div className={styles.container}>
            {genres.map((genre) => <GenreTile key={genre.id} genre={genre} isMovie={true}/>)}
        </div>
    );
}

export default MovieGenreList;
