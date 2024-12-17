'use client';

import styles from '@/styles/ui/movies-by-genre.module.scss';
import {useEffect, useState} from 'react';
import {fetchSeriesByGenre} from '@/app/lib/data';
import {Series} from '@/app/lib/series.model';
import SeriesCard from '@/app/ui/series-card';

function SeriesByGenre({genreId}: { genreId: string }) {
    const [series, setSeries] = useState<Series[]>([]);

    useEffect(() => {
        fetchSeriesByGenre(genreId)
            .then((res) => setSeries(res))
            .catch(e => {
                throw e;
            });
    }, []);

    return (
        <div className={styles.container}>
            {series.map(item => <SeriesCard size={'m'} key={item.id} item={item}/>)}
        </div>
    );
}

export default SeriesByGenre;