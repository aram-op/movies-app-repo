'use client';

import styles from '@/styles/ui/movies-by-genre.module.scss';
import {useEffect, useState} from 'react';
import {fetchMoviesByGenre} from '@/app/lib/data';
import {Movie} from '@/app/lib/movie.model';
import MovieCard from '@/app/ui/movie-card';

function MoviesByGenre({genreId}: { genreId: string }) {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetchMoviesByGenre(genreId)
            .then((res) => setMovies(res))
            .catch(e => {
                throw e;
            });
    }, []);

    return (
        <div className={styles.container}>
            {movies.map(movie => <MovieCard size={'m'} key={movie.id} movie={movie}/>)}
        </div>
    );
}

export default MoviesByGenre;