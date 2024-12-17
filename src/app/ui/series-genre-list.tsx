'use client';

import {useEffect, useState} from 'react';
import {fetchSeriesGenres} from '@/app/lib/data';
import {Genre} from '@/app/lib/genre.model';
import styles from '@/styles/ui/movie-genre-list.module.scss';
import GenreTile from '@/app/ui/genre-tile';

function SeriesGenreList() {
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        fetchSeriesGenres()
            .then((res) => setGenres(res.genres))
            .catch(e => {
                throw e
            });
    }, []);

    console.log(genres);

    return (
        <div className={styles.container}>
            {genres.map((genre) => <GenreTile key={genre.id} genre={genre} isMovie={false}/>)}
        </div>
    );
}

export default SeriesGenreList;
