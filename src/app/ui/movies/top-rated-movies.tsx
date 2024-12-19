'use client';

import {useEffect, useState} from 'react';
import {Movie} from '@/app/lib/movie.model';
import {fetchTopRatedMovies} from '@/app/lib/data';
import styles from '@/styles/ui/shared/movies-flex.module.scss';
import SectionHeading from '@/app/ui/shared/section-heading';
import MovieCard from '@/app/ui/shared/movie-card';
import TopRatedMoviesWireframe from '@/app/wireframes/top-rated-movies.wireframe';

function TopRatedMovies() {
    const [moviesPage1, setMoviesPage1] = useState<Movie[]>([]);
    const [moviesPage2, setMoviesPage2] = useState<Movie[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getResults(1);
    }, []);

    function getResults(page: 1 | 2) {
        fetchTopRatedMovies(page)
            .then((res) => {
                if(page === 1) {
                    setMoviesPage1(res);
                } else {
                    setMoviesPage2(res);
                }
                setIsLoading(false);
                if (error) setError(null);
            })
            .catch((err) => {
                console.error(err);
                setError(err);
                setIsLoading(false);
            });
    }

    function handleExpandSection() {
        if (!isExpanded) {
            setIsLoading(true);
            getResults(2);
        }
        setIsExpanded(!isExpanded);
    }

    if (error) throw new Error('Failed to fetch top rated movies');

    if (isLoading) return (<TopRatedMoviesWireframe/>);

    return (
        <div className={styles.container}>
            <SectionHeading title="Top Rated" onExpandClicked={handleExpandSection}/>
            <div className={styles.moviesContainer}>
                {moviesPage1.map(m => <MovieCard key={m.id} size={'l'} movie={m}/>)}
            </div>
            {isExpanded && <div className={styles.moviesContainer}>
                {moviesPage2.map(m => <MovieCard key={m.id} size={'l'} movie={m}/>)}
            </div>}
        </div>
    );
}

export default TopRatedMovies;
