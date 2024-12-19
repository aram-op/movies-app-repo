'use client';

import styles from '@/styles/ui/shared/genre-list.module.scss';
import {useEffect, useState} from 'react';
import {Genre} from '@/app/lib/genre.model';
import {fetchMovieGenres} from '@/app/lib/data';
import GenreTile from '@/app/ui/shared/genre-tile';
import GenreListWireframe from '@/app/wireframes/genre-list.wireframe';

function MovieGenreList() {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMovieGenres()
            .then((res) => {
                setGenres(res.genres);
                setIsLoading(false);
                if (error) setError(null);
            })
            .catch(e => {
                console.error(e);
                setError(e);
                setIsLoading(false);
            });
    }, []);

    if (error) throw new Error('Failed to fetch genres');

    if (isLoading) return <GenreListWireframe/>;

    return (
        <div className={styles.container}>
            {genres.map((genre) => <GenreTile key={genre.id} genre={genre} isMovie={true}/>)}
        </div>
    );
}

export default MovieGenreList;
