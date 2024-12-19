'use client';

import {useEffect, useState} from 'react';
import {addMovieBookmark, fetchMovieDetails, fetchMovieTrailer} from '@/app/lib/data';
import {Movie} from '@/app/lib/movie.model';
import styles from '@/styles/ui/shared/details.module.scss';
import StarRating from '@/app/ui/shared/star-rating';
import {Video} from '@/app/lib/video-response.model';
import Trailer from '@/app/ui/shared/trailer';
import MovieInfo from '@/app/ui/movies/movie-info';
import Genres from '@/app/ui/shared/genres';
import Casts from '@/app/ui/shared/casts';
import Synopsis from '@/app/ui/shared/synopsis';
import HomepageLink from '@/app/ui/shared/homepage-link';
import SharingLinks from '@/app/ui/shared/sharing-links';
import {useUser} from '@auth0/nextjs-auth0/client';
import classNames from 'classnames';
import {outfit} from '@/app/fonts';

function MovieDetails({id}: { id: string }) {
    const [details, setDetails] = useState<Movie>();
    const [trailer, setTrailer] = useState<Video | undefined>();
    const [error, setError] = useState<Error | null>(null);
    const {user} = useUser();

    useEffect(() => {
        fetchMovieDetails(id)
            .then((res: Movie) => {
                setDetails(res);
                if (error) setError(null);
            })
            .catch(e => {
                setError(e);
            });
        fetchMovieTrailer(id)
            .then((res: Video | undefined) => {
                setTrailer(res);
                if (error) setError(null);
            })
            .catch(e => {
                console.error(e);
                setError(e);
            });
    }, [id]);

    async function handleAddToBookmarks() {
        if (details?.id && user?.email) {
            try {
                await addMovieBookmark(details.id, user.email);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error);
                }
            }
        }
    }

    if (error) throw new Error('Failed to fetch movie details');

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

            <button
                type={'button'}
                className={classNames([styles.addToBookmarks], outfit.className)}
                onClick={handleAddToBookmarks}
            >
                <span>Add to bookmarks</span>
                <img src="/plus.svg" width={25} height={25}/>
            </button>

            <SharingLinks/>

            {details.genres && <Genres genres={details.genres}/>}

            <Synopsis text={details.overview}/>

            {details.casts?.cast && <Casts casts={details.casts.cast}/>}

            {details.homepage && <HomepageLink href={details.homepage}/>}
        </div>
    );
}

export default MovieDetails;