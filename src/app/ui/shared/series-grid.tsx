import styles from '@/styles/ui/shared/results-grid.module.scss';
import SeriesCard from '@/app/ui/series/series-card';
import {Series} from '@/app/lib/series.model';

function MoviesGrid({series}: { series: Series[] }) {
    return (
        <div className={styles.container}>
            {series.map(item => <SeriesCard size={'m'} key={item.id} item={item}/>)}
        </div>
    );
}

export default MoviesGrid;
