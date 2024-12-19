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

    useEffect(() => {
        fetchMoviesByGenre(genreId, 1)
            .then((res) => {
                setMovies(res.results);
                setIsLoading(false);
                //TMDB API limits the available page count to 500, even if in the results there are more
                setTotalPages(res.total_pages < 500 ? res.total_pages : 500);
            })
            .catch(e => {
                throw e;
            });
    }, [genreId]);

    function handlePageChange(pageNumber: number) {
        fetchMoviesByGenre(genreId, pageNumber)
            .then((res) => {
                setMovies(res.results);
                setTotalPages(res.total_pages < 500 ? res.total_pages : 500);
            })
            .catch(e => {
                throw e;
            });
    }

    if (isLoading) return <MovieGridWireframe/>;

    return (
        <>
            <MoviesGrid movies={movies}/>
            <Paginator totalPages={totalPages} onPageChange={handlePageChange}/>
        </>
    );
}

export default MoviesByGenre;