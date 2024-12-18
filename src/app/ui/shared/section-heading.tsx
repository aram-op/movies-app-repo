'use client';

import styles from '@/styles/ui/shared/section-heading.module.scss';
import Chip from '@/app/ui/shared/chip';

function SectionHeading({title, onExpandClicked}: { title: string, onExpandClicked: () => void }) {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>{title}</h2>
                <Chip text={'MOVIES'} isFilled={false}/>
            </div>
            <button className={styles.expand} onClick={onExpandClicked}>
                SEE MORE
            </button>
        </div>
    );
}

export default SectionHeading;