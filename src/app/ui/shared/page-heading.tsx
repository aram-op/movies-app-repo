'use client';

import styles from '@/styles/ui/shared/page-heading.module.scss';

function PageHeading({heading} : {heading: string}) {
    return(
        <h1 className={styles.heading}>{heading}</h1>
    );
}

export default PageHeading;