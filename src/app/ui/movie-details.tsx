'use client';

import {useEffect, useState} from 'react';
import {fetchMovieDetails, fetchMovieTrailer} from '@/app/lib/data';
import {Movie} from '@/app/lib/movie.model';
import styles from '@/styles/ui/movie-details.module.scss';
import StarRating from '@/app/ui/star-rating';
import {Video} from '@/app/lib/video-response.model';
import Trailer from '@/app/ui/trailer';
import MovieInfo from '@/app/ui/movie-info';
import Genres from '@/app/ui/genres';
import Casts from '@/app/ui/casts';
import Synopsis from '@/app/ui/synopsis';
import HomepageLink from '@/app/ui/homepage-link';
import SharingLinks from '@/app/ui/sharing-links';

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
            <img
                src={`https://image.tmdb.org/t/p/w1280/${details.poster_path}`}
                className={styles.poster}
            />
            <h1 className={styles.title}>{details.title}</h1>

            <p className={styles.tagline}>{details.tagline}</p>

            <div className={styles.ratingContainer}>
                <p className={styles.rating}>{(details.vote_average?.valueOf() / 2).toFixed(1)}</p>
                <StarRating rating={details.vote_average}/>
            </div>

            <MovieInfo details={details}/>

            {trailer && <Trailer id={trailer.key}/>}

            <SharingLinks/>

            {details.genres && <Genres genres={details.genres}/>}

            <Synopsis text={details.overview}/>

            {details.casts?.cast && <Casts casts={details.casts.cast}/>}

            {details.homepage && <HomepageLink href={details.homepage}/>}
        </div>
    );
}

export default MovieDetails;