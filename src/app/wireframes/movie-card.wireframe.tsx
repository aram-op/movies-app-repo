import styles from '@/styles/wireframes/movie-card-wireframe.module.scss';
import classNames from 'classnames';

function MovieCardWireframe({size}: { size: 's' | 'm' | 'l' }) {
    let className: string;

    switch (size) {
        case 's':
            className = styles.s;
            break;
        case 'm':
            className = styles.m;
            break;
        case 'l':
            className = styles.l;
            break;
    }

    return (
        <div className={classNames([styles.container], className)}>
            <svg className={styles.backdrop}/>
            <div className={styles.infoContainer}>
                <svg className={styles.info}/>
                <svg className={styles.title}/>
            </div>
        </div>
    );
}

export default MovieCardWireframe;