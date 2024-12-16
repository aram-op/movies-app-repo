'use client';

import styles from '@/styles/trending-movies.module.scss';
import SectionHeading from '@/app/ui/section-heading';
import {useEffect, useState} from 'react';
import {Movie} from '@/app/lib/movie.model';
import {fetchTrendingMovies} from '@/app/lib/data';
import MovieCard from '@/app/ui/movie-card';

function TrendingMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        fetchTrendingMovies()
            .then((res) => setMovies(res))
            .catch((err) => {
                throw err
            });
    }, []);

    function handleExpandSection() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className={styles.container}>
            <SectionHeading title="Trending" onExpandClicked={handleExpandSection}/>
            <div className={styles.moviesContainer}>
                {movies.map((m, i) => i < 10 && <MovieCard key={m.id} size={'s'} movie={m}/>)}
            </div>
            {isExpanded && <div className={styles.moviesContainer}>
                {movies.map((m, i) => i >= 10 && <MovieCard key={m.id} size={'s'} movie={m}/>)}
            </div>}
        </div>
    );
}

export default TrendingMovies;