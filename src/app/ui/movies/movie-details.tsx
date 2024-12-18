'use client';

import {useEffect, useState} from 'react';
import {fetchMovieDetails, fetchMovieTrailer} from '@/app/lib/data';
import {Movie} from '@/app/lib/movie.model';
import styles from '@/styles/ui/movies/movie-details.module.scss';
import StarRating from '@/app/ui/shared/star-rating';
import {Video} from '@/app/lib/video-response.model';
import Trailer from '@/app/ui/shared/trailer';
import MovieInfo from '@/app/ui/movies/movie-info';
import Genres from '@/app/ui/shared/genres';
import Casts from '@/app/ui/shared/casts';
import Synopsis from '@/app/ui/shared/synopsis';
import HomepageLink from '@/app/ui/shared/homepage-link';
import SharingLinks from '@/app/ui/shared/sharing-links';

function MovieDetails({id}: { id: string }) {
    const [details, setDetails] = useState<Movie>();
    const [trailer, setTrailer] = useState<Video | undefined>();

    useEffect(() => {
        fetchMovieDetails(id)
            .then((res: Movie) => setDetails(res))
            .catch(e => {
                throw e
            });
        fetchMovieTrailer(id)
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
                    <h1 className={styles.title}>{details.title}</h1>

                    <p className={styles.tagline}>{details.tagline}</p>

                    <div className={styles.ratingContainer}>
                        <p className={styles.rating}>{(details.vote_average?.valueOf() / 2).toFixed(1)}</p>
                        <StarRating rating={details.vote_average}/>
                    </div>

                    <MovieInfo details={details}/>

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

export default MovieDetails;