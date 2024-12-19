import styles from '@/styles/ui/shared/chip.module.scss';
import classNames from 'classnames';

function Chip({text, isFilled} : {text : string, isFilled : boolean}) {
    const className = classNames([styles.chip], [isFilled ? styles.filled : styles.outlined]);

    return(
        <span className={className}>{text}</span>
    );
}

export default Chip;
