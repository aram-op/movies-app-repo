import styles from '@/styles/ui/shared/synopsis.module.scss';

function Synopsis({text} : {text: string}) {
    return (
        <div className={styles.container}>
            <p className={styles.label}>Synopsis</p>
            <p className={styles.synopsis}>{text}</p>
        </div>
    );
}

export default Synopsis;
