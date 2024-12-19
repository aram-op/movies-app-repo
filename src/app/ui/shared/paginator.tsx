import styles from '@/styles/ui/shared/paginator.module.scss';
import ReactPaginate from 'react-paginate';

function Paginator({totalPages, onPageChange} : {totalPages: number, onPageChange: (selected: number) => void}) {
    return(
        <ReactPaginate
            className={styles.paginator}
            pageClassName={styles.page}
            breakLinkClassName={styles.page}
            nextClassName={styles.page}
            previousClassName={styles.page}
            activeClassName={styles.active}
            pageCount={totalPages}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(s) => onPageChange(s.selected + 1)}
            pageRangeDisplayed={3}
            renderOnZeroPageCount={null}
            initialPage={0}
        />
    );
}

export default Paginator;
