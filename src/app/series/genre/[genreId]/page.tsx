import {fetchSeriesGenreById} from '@/app/lib/data';
import PageHeading from '@/app/ui/page-heading';
import SeriesByGenre from '@/app/ui/series-by-genre';

export default async function Page({params}: { params: Promise<{ genreId: string }> }) {
    const genreId = (await params).genreId;
    const genre = await fetchSeriesGenreById(parseInt(genreId));

    return(
        <>
            <PageHeading heading={`${genre?.name} TV Series`}/>
            <SeriesByGenre genreId={genreId}/>
        </>
    );
}
