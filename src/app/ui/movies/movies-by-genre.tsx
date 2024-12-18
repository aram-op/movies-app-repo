'use client';

import styles from '@/styles/ui/movies/movies-by-genre.module.scss';
import {useEffect, useState} from 'react';
import {fetchMoviesByGenre} from '@/app/lib/data';
import {Movie} from '@/app/lib/movie.model';
import MovieCard from '@/app/ui/shared/movie-card';
import ReactPaginate from 'react-paginate';
import MovieGridWireframe from '@/app/wireframes/movie-grid.wireframe';

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
                setTotalPages(res.total_pages < 500?  res.total_pages : 500);
            })
            .catch(e => {
                throw e;
            });
    }, []);

    function handlePageChange(pageNumber: number) {
        fetchMoviesByGenre(genreId, pageNumber)
            .then((res) => {
                setMovies(res.results);
                setTotalPages(res.total_pages < 500?  res.total_pages : 500);
            })
            .catch(e => {
                throw e;
            });
    }

    if (isLoading) return <MovieGridWireframe/>;

    return (
        <>
            <div className={styles.container}>
                {movies.map(movie => <MovieCard size={'m'} key={movie.id} movie={movie}/>)}
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
                onPageChange={(s) => handlePageChange(s.selected+1)}
                pageRangeDisplayed={3}
                renderOnZeroPageCount={null}
                initialPage={0}
            />
        </>
    );
}

export default MoviesByGenre;