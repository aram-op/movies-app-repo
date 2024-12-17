import {Movie} from '@/app/lib/movie.model';
import {Video} from '@/app/lib/video-response.model';

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

export async function fetchTopRatedMovies(page: number): Promise<Movie[]> {
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

export async function fetchPopularMovies(page: number): Promise<Movie[]> {
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

export async function fetchMovieDetails(id: string) {
    const apikey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apikey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=casts&language=en-US`, options);

    if (response.ok) {
        const resp = await response.json();
        console.log(resp);
        return resp;
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchMovieTrailer(id: string): Promise<Video | undefined> {
    const apikey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apikey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);

    if (response.ok) {
        const resp = await response.json();
        return resp.results.find((video: Video) => video.type === 'Trailer' && video.official);
    }

    throw new Error(`Response Status: ${response.status}`);
}
