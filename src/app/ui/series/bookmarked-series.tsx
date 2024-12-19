'use client';

import {useEffect, useState} from 'react';
import {fetchBookmarkedSeries} from '@/app/lib/data';
import {useUser} from '@auth0/nextjs-auth0/client';
import styles from '@/styles/ui/movies/movies-by-genre.module.scss';
import MovieGridWireframe from '@/app/wireframes/movie-grid.wireframe';
import {Series} from '@/app/lib/series.model';
import SeriesCard from '@/app/ui/series/series-card';

function BookmarkedSeries() {
    const [series, setSeries] = useState<Series[]>([]);
    const [isFetching, setIsFetching] = useState(true);
    const {user, isLoading} = useUser();

    console.log(series);

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
        <div className={styles.container}>
            {series.map(item => <SeriesCard size={'m'} key={item.id} item={item}/>)}
        </div>
    );
}

export default BookmarkedSeries;
