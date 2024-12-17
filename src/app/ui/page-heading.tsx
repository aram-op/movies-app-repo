'use client';

import styles from '@/styles/ui/page-heading.module.scss';

function PageHeading({heading} : {heading: string}) {
    return(
        <h1 className={styles.heading}>{heading}</h1>
    );
}

export default PageHeading;