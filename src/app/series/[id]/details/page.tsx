import SeriesDetails from '@/app/ui/series-details';

export default async function Page({params}: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    return (
        <SeriesDetails id={id}/>
    );
}