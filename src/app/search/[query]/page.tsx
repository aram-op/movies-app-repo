import Link from 'next/link';
import styles from '@/styles/search-page.module.scss';
import PageHeading from '@/app/ui/page-heading';

export default async function Page({params}: { params: Promise<{ query: string }> }) {
    const query = (await params).query;

    return (
        <>
            <PageHeading heading={`Search results for: "${query}"`}/>
            <div className={styles.container}>
                <Link href={`/search/${query}/movies`} className={styles.link}>Movies {'>'}</Link>
                <Link href={`/search/${query}/series`} className={styles.link}>Series {'>'}</Link>
            </div>
        </>
    );
}