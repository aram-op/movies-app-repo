'use client';

import {useEffect, useState} from 'react';
import {Movie} from '@/app/lib/movie.model';
import {fetchPopularMovies} from '@/app/lib/data';
import styles from '@/styles/ui/top-rated-movies.module.scss';
import SectionHeading from '@/app/ui/section-heading';
import MovieCard from '@/app/ui/movie-card';

function PopularMovies() {
    const [moviesPage1, setMoviesPage1] = useState<Movie[]>([]);
    const [moviesPage2, setMoviesPage2] = useState<Movie[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        fetchPopularMovies(1)
            .then((res) => setMoviesPage1(res))
            .catch((err) => {
                throw err
            });
    }, []);

    function handleExpandSection() {
        if (!isExpanded) {
            fetchPopularMovies(2)
                .then((res) => setMoviesPage2(res))
                .catch((err) => {
                    throw err
                });
        }

        setIsExpanded(!isExpanded);
    }

    return (
        <div className={styles.container}>
            <SectionHeading title="Popular" onExpandClicked={handleExpandSection}/>
            <div className={styles.moviesContainer}>
                {moviesPage1.map(m => <MovieCard key={m.id} size={'m'} movie={m}/>)}
            </div>
            {isExpanded && <div className={styles.moviesContainer}>
                {moviesPage2.map(m => <MovieCard key={m.id} size={'m'} movie={m}/>)}
            </div>}
        </div>
    );
}

export default PopularMovies;
