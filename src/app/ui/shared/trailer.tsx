import styles from '@/styles/ui/shared/trailer.module.scss';
import YouTube from 'react-youtube';

function Trailer({id} : {id: string}) {
    return(
        <div className={styles.container}>
            <YouTube
                videoId={id}
                iframeClassName={styles.player}
            />
        </div>
    );
}

export default Trailer;
