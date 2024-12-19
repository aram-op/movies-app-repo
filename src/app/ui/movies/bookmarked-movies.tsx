'use client';

import {useEffect, useState} from 'react';
import {Movie} from '@/app/lib/movie.model';
import {fetchBookmarkedMovies} from '@/app/lib/data';
import {useUser} from '@auth0/nextjs-auth0/client';
import styles from '@/styles/ui/movies/movies-by-genre.module.scss';
import MovieCard from '@/app/ui/shared/movie-card';
import MovieGridWireframe from '@/app/wireframes/movie-grid.wireframe';

function BookmarkedMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isFetching, setIsFetching] = useState(true);
    const {user, isLoading} = useUser();

    useEffect(() => {
        if (!isLoading && user) {
            fetchBookmarkedMovies(user!.email!.valueOf())
                .then((res) => {
                    setMovies(res);
                    setIsFetching(false);
                })
                .catch(e => {
                    setIsFetching(false);
                    throw e;
                });
        }
    }, [isLoading, user]);


    if (isFetching) return <MovieGridWireframe/>

    return (
        <div className={styles.container}>
            {movies.map(movie => <MovieCard size={'m'} key={movie.id} movie={movie}/>)}
        </div>
    );
}

export default BookmarkedMovies;
