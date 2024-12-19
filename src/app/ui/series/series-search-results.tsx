'use client';

import {useEffect, useState} from 'react';
import {fetchSeriesBySearch} from '@/app/lib/data';
import {Series} from '@/app/lib/series.model';
import PageHeading from '@/app/ui/shared/page-heading';
import MovieGridWireframe from '@/app/wireframes/movie-grid.wireframe';
import SeriesGrid from '@/app/ui/shared/series-grid';
import Paginator from '@/app/ui/shared/paginator';

function SeriesSearchResults({query}: { query: string }) {
    const [results, setResults] = useState<Series[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchSeriesBySearch(query, 1)
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
        fetchSeriesBySearch(query, pageNumber)
            .then((res) => {
                setResults(res.results);
                setTotalPages(res.total_pages < 500 ? res.total_pages : 500);
            })
            .catch(e => {
                throw e
            });
    }

    if (isLoading) return <MovieGridWireframe/>;

    if (results.length === 0) return (
        <PageHeading heading={`No TV Series by query: "${query}" found.`}/>
    );


    return (
        <>
            <PageHeading heading={`TV Series search results for: "${query}"`}/>
            <SeriesGrid series={results}/>
            <Paginator totalPages={totalPages} onPageChange={handlePageChange}/>
        </>
    );
}

export default SeriesSearchResults;
