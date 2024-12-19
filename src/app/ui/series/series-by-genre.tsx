'use client';

import {useEffect, useState} from 'react';
import {fetchSeriesByGenre} from '@/app/lib/data';
import {Series} from '@/app/lib/series.model';
import MovieGridWireframe from '@/app/wireframes/movie-grid.wireframe';
import SeriesGrid from '@/app/ui/shared/series-grid';
import Paginator from '@/app/ui/shared/paginator';

function SeriesByGenre({genreId}: { genreId: string }) {
    const [series, setSeries] = useState<Series[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getResults(1);
    }, [genreId]);

    function getResults(pageNumber: number) {
        fetchSeriesByGenre(genreId, pageNumber)
            .then((res) => {
                setSeries(res.results);
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

    if (error) throw new Error('Failed to fetch series');

    if (isLoading) return <MovieGridWireframe/>;

    return (
        <>
            <SeriesGrid series={series}/>
            <Paginator totalPages={totalPages} onPageChange={handlePageChange}/>
        </>
    );
}

export default SeriesByGenre;