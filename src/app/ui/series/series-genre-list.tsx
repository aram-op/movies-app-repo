'use client';

import {useEffect, useState} from 'react';
import {fetchSeriesGenres} from '@/app/lib/data';
import {Genre} from '@/app/lib/genre.model';
import styles from '@/styles/ui/shared/genre-list.module.scss';
import GenreTile from '@/app/ui/shared/genre-tile';
import GenreListWireframe from '@/app/wireframes/genre-list.wireframe';

function SeriesGenreList() {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchSeriesGenres()
            .then((res) => {
                setGenres(res.genres);
                setIsLoading(false);
            })
            .catch(e => {
                throw e
            });
    }, []);

    if (isLoading) return <GenreListWireframe/>;

    return (
        <div className={styles.container}>
            {genres.map((genre) => <GenreTile key={genre.id} genre={genre} isMovie={false}/>)}
        </div>
    );
}

export default SeriesGenreList;
