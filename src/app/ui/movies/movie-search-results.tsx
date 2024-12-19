'use client';

import {useEffect, useState} from 'react';
import {Movie} from '@/app/lib/movie.model';
import {fetchMoviesBySearch} from '@/app/lib/data';
import PageHeading from '@/app/ui/shared/page-heading';
import MovieGridWireframe from '@/app/wireframes/movie-grid.wireframe';
import MoviesGrid from '@/app/ui/shared/movies-grid';
import Paginator from '@/app/ui/shared/paginator';

function MovieSearchResults({query}: { query: string }) {
    const [results, setResults] = useState<Movie[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getResults(1);
    }, [query]);

    function getResults(pageNumber: number) {
        fetchMoviesBySearch(query, pageNumber)
            .then((res) => {
                setResults(res.results);
                setTotalPages(res.total_pages < 500 ? res.total_pages : 500);
                setIsLoading(false);
                if(error) setError(null);
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

    if (error) throw new Error('Failed to fetch search results');

    if (isLoading) return <MovieGridWireframe/>;

    if (results.length === 0) return (
        <PageHeading heading={`No movies by query: "${query}" found.`}/>
    );

    return (
        <>
            <PageHeading heading={`Movie search results for: "${query}"`}/>
            <MoviesGrid movies={results}/>
            <Paginator totalPages={totalPages} onPageChange={handlePageChange}/>
        </>
    );
}

export default MovieSearchResults;
