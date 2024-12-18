import SeriesGenreList from '@/app/ui/series/series-genre-list';
import PageHeading from '@/app/ui/shared/page-heading';

export default function Page() {
    return(
        <>
            <PageHeading heading={'TV Series'}/>
            <SeriesGenreList/>
        </>
    );
}