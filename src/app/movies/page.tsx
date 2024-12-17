import MovieGenreList from '@/app/ui/movie-genre-list';
import PageHeading from '@/app/ui/page-heading';

export default function Page() {
    return(
        <>
            <PageHeading heading={'Movies'}/>
            <MovieGenreList/>
        </>
    );
}