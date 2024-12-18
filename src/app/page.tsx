import TrendingMovies from '@/app/ui/movies/trending-movies';
import TopRatedMovies from '@/app/ui/movies/top-rated-movies';
import PopularMovies from '@/app/ui/movies/popular-movies';

export default function Home() {
    return (
        <>
            <TrendingMovies/>
            <TopRatedMovies/>
            <PopularMovies/>
        </>
    );
}
