'use client';

import {useEffect, useState} from 'react';
import {fetchSeriesDetails, fetchSeriesTrailer} from '@/app/lib/data';
import styles from '@/styles/ui/movies/movie-details.module.scss';
import StarRating from '@/app/ui/shared/star-rating';
import {Video} from '@/app/lib/video-response.model';
import Trailer from '@/app/ui/shared/trailer';
import Genres from '@/app/ui/shared/genres';
import Casts from '@/app/ui/shared/casts';
import Synopsis from '@/app/ui/shared/synopsis';
import HomepageLink from '@/app/ui/shared/homepage-link';
import SharingLinks from '@/app/ui/shared/sharing-links';
import {Series} from '@/app/lib/series.model';
import SeriesInfo from '@/app/ui/series/series-info';

function SeriesDetails({id}: { id: string }) {
    const [details, setDetails] = useState<Series>();
    const [trailer, setTrailer] = useState<Video | undefined>();

    useEffect(() => {
        fetchSeriesDetails(id)
            .then((res: Series) => setDetails(res))
            .catch(e => {
                throw e
            });
        fetchSeriesTrailer(id)
            .then((res: Video | undefined) => setTrailer(res))
            .catch(e => {
                throw e
            });
    }, []);

    if (details) return (
        <div className={styles.container}>
            <div className={styles.columns}>
                <img
                    src={`https://image.tmdb.org/t/p/w1280/${details.poster_path}`}
                    className={styles.poster}
                />
                <div className={styles.containerFlex}>
                    <h1 className={styles.title}>{details.name}</h1>

                    <p className={styles.tagline}>{details.tagline}</p>

                    <div className={styles.ratingContainer}>
                        <p className={styles.rating}>{(details.vote_average?.valueOf() / 2).toFixed(1)}</p>
                        <StarRating rating={details.vote_average}/>
                    </div>

                    <SeriesInfo details={details}/>

                    {trailer && <Trailer id={trailer.key}/>}
                </div>
            </div>

            <SharingLinks/>

            {details.genres && <Genres genres={details.genres}/>}

            <Synopsis text={details.overview}/>

            {details.casts?.cast && <Casts casts={details.casts.cast}/>}

            {details.homepage && <HomepageLink href={details.homepage}/>}
        </div>
    );
}

export default SeriesDetails;