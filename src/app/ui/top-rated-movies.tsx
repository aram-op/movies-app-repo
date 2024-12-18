'use client';

import {useEffect, useState} from 'react';
import {Movie} from '@/app/lib/movie.model';
import {fetchTopRatedMovies} from '@/app/lib/data';
import styles from '@/styles/ui/top-rated-movies.module.scss';
import SectionHeading from '@/app/ui/section-heading';
import MovieCard from '@/app/ui/movie-card';
import TopRatedMoviesWireframe from '@/app/wireframes/top-rated-movies.wireframe';

function TopRatedMovies() {
    const [moviesPage1, setMoviesPage1] = useState<Movie[]>([]);
    const [moviesPage2, setMoviesPage2] = useState<Movie[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchTopRatedMovies(1)
            .then((res) => {
                setMoviesPage1(res);
                setIsLoading(false);
            })
            .catch((err) => {
                throw err
            });
    }, []);

    function handleExpandSection() {
        if (!isExpanded) {
            setIsLoading(true);
            fetchTopRatedMovies(2)
                .then((res) => {
                    setMoviesPage2(res);
                    setIsLoading(false);
                })
                .catch((err) => {
                    throw err
                });
        }

        setIsExpanded(!isExpanded);
    }

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
