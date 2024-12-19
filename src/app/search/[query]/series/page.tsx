import SeriesSearchResults from '@/app/ui/series/series-search-results';

export default async function Page({params}: { params: Promise<{ query: string }> }) {
    const query = (await params).query;
    const queryDecoded = decodeURIComponent(query);

    return (
        <>
            <SeriesSearchResults query={queryDecoded}/>
        </>
    );
}
