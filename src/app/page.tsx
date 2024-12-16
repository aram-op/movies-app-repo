import TrendingMovies from '@/app/ui/trending-movies';
import TopRatedMovies from '@/app/ui/top-rated-movies';
import PopularMovies from '@/app/ui/popular-movies';

export default function Home() {
    return (
        <>
            <TrendingMovies/>
            <TopRatedMovies/>
            <PopularMovies/>
        </>
    );
}
