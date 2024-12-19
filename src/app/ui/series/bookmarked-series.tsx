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
    const {user, isLoading} = useUser();

    useEffect(() => {
        if (!isLoading && user) {
            fetchBookmarkedSeries(user!.email!.valueOf())
                .then((res) => {
                    setSeries(res);
                    setIsFetching(false);
                })
                .catch(e => {
                    setIsFetching(false);
                    throw e;
                });
        }
    }, [isLoading, user]);


    if (isFetching) return <MovieGridWireframe/>

    return (
        <SeriesGrid series={series}/>
    );
}

export default BookmarkedSeries;
