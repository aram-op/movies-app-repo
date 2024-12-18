'use client';

import styles from '@/styles/ui/movies-by-genre.module.scss';
import {useEffect, useState} from 'react';
import {fetchSeriesByGenre} from '@/app/lib/data';
import {Series} from '@/app/lib/series.model';
import SeriesCard from '@/app/ui/series-card';
import ReactPaginate from 'react-paginate';
import MovieGridWireframe from '@/app/wireframes/movie-grid.wireframe';

function SeriesByGenre({genreId}: { genreId: string }) {
    const [series, setSeries] = useState<Series[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchSeriesByGenre(genreId, 1)
            .then((res) => {
                setSeries(res.results);
                setIsLoading(false);
                //TMDB API limits the available page count to 500, even if in the results there are more
                setTotalPages(res.total_pages < 500 ? res.total_pages : 500);
            })
            .catch(e => {
                throw e;
            });
    }, []);

    function handlePageChange(pageNumber: number) {
        fetchSeriesByGenre(genreId, pageNumber)
            .then((res) => {
                setSeries(res.results);
                setTotalPages(res.total_pages < 500 ? res.total_pages : 500);
            })
            .catch(e => {
                throw e;
            });
    }

    if(isLoading) return <MovieGridWireframe/>;

    return (
        <>
            <div className={styles.container}>
                {series.map(item => <SeriesCard size={'m'} key={item.id} item={item}/>)}
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
                initialPage={0}/>
        </>
    );
}

export default SeriesByGenre;