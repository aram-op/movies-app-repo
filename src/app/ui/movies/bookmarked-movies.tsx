'use client';

import {useEffect, useState} from 'react';
import {Movie} from '@/app/lib/movie.model';
import {fetchBookmarkedMovies} from '@/app/lib/data';
import {useUser} from '@auth0/nextjs-auth0/client';
import MovieGridWireframe from '@/app/wireframes/movie-grid.wireframe';
import MoviesGrid from '@/app/ui/shared/movies-grid';

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
        <MoviesGrid movies={movies}/>
    );
}

export default BookmarkedMovies;
