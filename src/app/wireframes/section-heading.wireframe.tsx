import styles from '@/styles/wireframes/section-heading-wireframe.module.scss';
import ChipWireframe from '@/app/wireframes/chip.wireframe';

function SectionHeadingWireframe() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <svg className={styles.title}/>
                <ChipWireframe/>
            </div>
            <svg className={styles.expand}/>
        </div>
    );
}

export default SectionHeadingWireframe;