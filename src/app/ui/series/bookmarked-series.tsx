'use client';

import {useEffect, useState} from 'react';
import {fetchBookmarkedSeries} from '@/app/lib/data';
import {useUser} from '@auth0/nextjs-auth0/client';
import MovieGridWireframe from '@/app/wireframes/movie-grid.wireframe';
import {Series} from '@/app/lib/series.model';
import SeriesGrid from '@/app/ui/shared/series-grid';

function BookmarkedSeries() {
    const [series, setSeries] = useState<Series[]>([]);
    const [isFetching, setIsFetching] = useState(true);
    const [fetchError, setFetchError] = useState(null);
    const {user, isLoading, error} = useUser();

    useEffect(() => {
        if (!isLoading && user) {
            fetchBookmarkedSeries(user!.email!.valueOf())
                .then((res) => {
                    setSeries(res);
                    setIsFetching(false);
                    if (fetchError) setFetchError(null);
                })
                .catch(e => {
                    console.error(e);
                    setFetchError(e);
                    setIsFetching(false);
                });
        }
    }, [isLoading, user]);

    if (error || fetchError) throw new Error('Failed to fetch bookmarked series');

    if (isFetching) return <MovieGridWireframe/>

    return (
        <SeriesGrid series={series}/>
    );
}

export default BookmarkedSeries;
