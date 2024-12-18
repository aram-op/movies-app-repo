'use client';

import styles from '@/styles/ui/searchbar.module.scss';
import {redirect} from 'next/navigation';
import {useDebouncedCallback} from 'use-debounce';
import {FormEvent, useState} from 'react';

function Searchbar() {
    const [query, setQuery] = useState('');

    const handleChange = useDebouncedCallback((term: string) => {
        setQuery(term);
    }, 300);

    function handleSearch(e: FormEvent) {
        e.preventDefault();

        if (query && query.trim() !== '') {
            redirect(`/search/${query}`);
        }
    }

    return (
        <div className={styles.searchbar}>
            <form className={styles.form} onSubmit={handleSearch}>
                <input
                    className={styles.searchField}
                    placeholder="Search for movies or TV series"
                    onChange={(e) => handleChange(e.target.value)}
                />
                <button
                    className={styles.searchBtn}
                    type={'submit'}
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default Searchbar;
