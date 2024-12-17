import styles from '@/styles/ui/casts.module.scss';
import {Cast} from '@/app/lib/movie.model';
import Chip from '@/app/ui/chip';

function Casts({casts} : {casts: Cast[]}) {
    return (
        <div className={styles.container}>
            <p className={styles.label}>Casts</p>
            <div className={styles.castsFlex}>
                {casts.map((actor: Cast, i) => i < 12 &&
                    <Chip text={actor.name} isFilled={false} key={actor.id}/>)}
            </div>
        </div>
    );
}

export default Casts;
