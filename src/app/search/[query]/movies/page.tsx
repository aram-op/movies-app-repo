import MovieSearchResults from '@/app/ui/movies/movie-search-results';

export default async function Page({params}: { params: Promise<{ query: string }> }) {
    const query = (await params).query;

    return (
        <>
            <MovieSearchResults query={query}/>
        </>
    );
}