import BookmarkedMovies from '@/app/ui/movies/bookmarked-movies';
import PageHeading from '@/app/ui/shared/page-heading';
import BookmarkedSeries from '@/app/ui/series/bookmarked-series';

export default function Page() {
    return (
        <>
            <PageHeading heading={'Bookmarked Movies'}/>
            <BookmarkedMovies/>
            <PageHeading heading={'Bookmarked Series'}/>
            <BookmarkedSeries/>
        </>
    );
}
