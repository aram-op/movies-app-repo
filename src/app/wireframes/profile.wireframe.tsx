import styles from '@/styles/wireframes/profile-wireframe.module.scss';

function ProfileWireframe() {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}></div>

            <div className={styles.infoItem}>
                <div className={styles.label}></div>
                <div className={styles.info}></div>
            </div>

            <div className={styles.infoItem}>
                <div className={styles.label}></div>
                <div className={styles.info}></div>
            </div>

            <div className={styles.logout}>
            </div>
        </div>
    );
}

export default ProfileWireframe;
