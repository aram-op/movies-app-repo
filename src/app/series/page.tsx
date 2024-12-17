import SeriesGenreList from '@/app/ui/series-genre-list';
import PageHeading from '@/app/ui/page-heading';

export default function Page() {
    return(
        <>
            <PageHeading heading={'Tv Series'}/>
            <SeriesGenreList/>
        </>
    );
}