import styles from '@/styles/ui/shared/genres.module.scss';
import Chip from '@/app/ui/shared/chip';

function Genres({genres} : {genres: {id: number, name: string}[]}) {
    return (
        <div className={styles.container}>
            <p className={styles.label}>Genres</p>
            <div className={styles.genresFlex}>
                {genres.map((genre) => <Chip text={genre.name} isFilled={true} key={genre.id}/>)}
            </div>
        </div>
    );
}

export default Genres;