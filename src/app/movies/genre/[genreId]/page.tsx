import MoviesByGenre from '@/app/ui/movies/movies-by-genre';
import {fetchMovieGenreById} from '@/app/lib/data';
import PageHeading from '@/app/ui/shared/page-heading';

export default async function Page({params}: { params: Promise<{ genreId: string }> }) {
    const genreId = (await params).genreId;
    const genre = await fetchMovieGenreById(parseInt(genreId));

    return (
        <>
            <PageHeading heading={`${genre?.name} Movies`}/>
            <MoviesByGenre genreId={genreId}/>
        </>
    );
}