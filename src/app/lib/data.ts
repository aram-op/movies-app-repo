import {Movie} from '@/app/lib/movie.model';

export async function fetchTrendingMovies(): Promise<Movie[]> {
    const apikey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apikey}`
        }
    };

    const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options);

    if (response.ok) {
        const json = await response.json();
        return json.results;
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchTopRatedMovies(page: number) : Promise<Movie[]> {
    const apikey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apikey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`, options);

    if (response.ok) {
        const json = await response.json();
        return json.results;
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchPopularMovies(page: number) : Promise<Movie[]> {
    const apikey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apikey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options);

    if (response.ok) {
        const json = await response.json();
        return json.results;
    }

    throw new Error(`Response Status: ${response.status}`);
}