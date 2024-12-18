'use client';

import styles from '@/styles/ui/movies-by-genre.module.scss';
import {useEffect, useState} from 'react';
import {fetchSeriesBySearch} from '@/app/lib/data';
import ReactPaginate from 'react-paginate';
import {Series} from '@/app/lib/series.model';
import SeriesCard from '@/app/ui/series-card';
import PageHeading from '@/app/ui/page-heading';

function SeriesSearchResults({query}: { query: string }) {
    const [results, setResults] = useState<Series[]>([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchSeriesBySearch(query, 1)
            .then((res) => {
                setResults(res.results);
                setTotalPages(res.total_pages < 500 ? res.total_pages : 500);
            })
            .catch(e => {
                throw e
            });
    }, []);

    function handlePageChange(pageNumber: number) {
        fetchSeriesBySearch(query, pageNumber)
            .then((res) => {
                setResults(res.results);
                setTotalPages(res.total_pages < 500 ? res.total_pages : 500);
            })
            .catch(e => {
                throw e
            });
    }

    if(results.length === 0) return (
        <PageHeading heading={`No TV Series by query: "${query}" found.`}/>
    );

    return (
        <>
            <PageHeading heading={`TV Series search results for: "${query}"`}/>
            <div className={styles.container}>
                {results.map(item => <SeriesCard size={'m'} key={item.id} item={item}/>)}
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

export default SeriesSearchResults;
