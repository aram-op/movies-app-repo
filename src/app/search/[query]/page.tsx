import Link from 'next/link';
import styles from '@/styles/search-page.module.scss';
import PageHeading from '@/app/ui/shared/page-heading';

export default async function Page({params}: { params: Promise<{ query: string }> }) {
    const query = (await params).query;
    const queryDecoded = decodeURIComponent(query);

    return (
        <>
            <PageHeading heading={`Search results for: "${queryDecoded}"`}/>
            <div className={styles.container}>
                <Link href={`/search/${query}/movies`} className={styles.link}>Movies {'>'}</Link>
                <Link href={`/search/${query}/series`} className={styles.link}>Series {'>'}</Link>
            </div>
        </>
    );
}