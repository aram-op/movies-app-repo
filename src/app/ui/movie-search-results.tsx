'use client';

import styles from '@/styles/ui/movies-by-genre.module.scss';
import {useEffect, useState} from 'react';
import {Movie} from '@/app/lib/movie.model';
import {fetchMoviesBySearch} from '@/app/lib/data';
import MovieCard from '@/app/ui/movie-card';
import ReactPaginate from 'react-paginate';
import PageHeading from '@/app/ui/page-heading';
import MovieGridWireframe from '@/app/wireframes/movie-grid.wireframe';

function MovieSearchResults({query}: { query: string }) {
    const [results, setResults] = useState<Movie[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchMoviesBySearch(query, 1)
            .then((res) => {
                setResults(res.results);
                setTotalPages(res.total_pages < 500 ? res.total_pages : 500);
                setIsLoading(false);
            })
            .catch(e => {
                throw e
            });
    }, []);

    function handlePageChange(pageNumber: number) {
        fetchMoviesBySearch(query, pageNumber)
            .then((res) => {
                setResults(res.results);
                setTotalPages(res.total_pages < 500 ? res.total_pages : 500);
            })
            .catch(e => {
                throw e
            });
    }

    if(isLoading) return <MovieGridWireframe/>;

    if(results.length === 0) return (
        <PageHeading heading={`No movies by query: "${query}" found.`}/>
    );

    return (
        <>
            <PageHeading heading={`Movie search results for: "${query}"`}/>
            <div className={styles.container}>
                {results.map(movie => <MovieCard size={'m'} key={movie.id} movie={movie}/>)}
            </div>
            <ReactPaginate
                className={styles.paginator}
                pageClassName={styles.page}
                breakLinkClassName={styles.page}
                nextClassName={styles.page}
                previousClassName={styles.page}
                activeClassName={styles.active}
                pageCount={totalPages}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={(s) => handlePageChange(s.selected + 1)}
                pageRangeDisplayed={3}
                renderOnZeroPageCount={null}
                initialPage={0}
            />
        </>

    );
}

export default MovieSearchResults;
