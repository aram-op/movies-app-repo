import MovieGenreList from '@/app/ui/movies/movie-genre-list';
import PageHeading from '@/app/ui/shared/page-heading';

export default function Page() {
    return(
        <>
            <PageHeading heading={'Movies'}/>
            <MovieGenreList/>
        </>
    );
}
