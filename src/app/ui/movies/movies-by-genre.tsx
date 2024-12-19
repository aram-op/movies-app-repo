'use client';

import {useEffect, useState} from 'react';
import {fetchMoviesByGenre} from '@/app/lib/data';
import {Movie} from '@/app/lib/movie.model';
import MovieGridWireframe from '@/app/wireframes/movie-grid.wireframe';
import MoviesGrid from '@/app/ui/shared/movies-grid';
import Paginator from '@/app/ui/shared/paginator';

function MoviesByGenre({genreId}: { genreId: string }) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getResults(1);
    }, [genreId]);

    function getResults(pageNumber: number) {
        fetchMoviesByGenre(genreId, pageNumber)
            .then((res) => {
                setMovies(res.results);
                setIsLoading(false);
                //TMDB API limits the available page count to 500, even if in the results there are more
                setTotalPages(res.total_pages < 500 ? res.total_pages : 500);
                if (error) setError(null);
            })
            .catch(e => {
                console.error(e);
                setError(e);
                setIsLoading(false);
            });
    }

    function handlePageChange(pageNumber: number) {
        getResults(pageNumber);
    }

    if (error) throw new Error('Failed to fetch movies');

    if (isLoading) return <MovieGridWireframe/>;

    return (
        <>
            <MoviesGrid movies={movies}/>
            <Paginator totalPages={totalPages} onPageChange={handlePageChange}/>
        </>
    );
}

export default MoviesByGenre;
