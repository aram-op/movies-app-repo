import MovieSearchResults from '@/app/ui/movies/movie-search-results';

export default async function Page({params}: { params: Promise<{ query: string }> }) {
    const query = (await params).query;
    const queryDecoded = decodeURIComponent(query);

    return (
        <>
            <MovieSearchResults query={queryDecoded}/>
        </>
    );
}