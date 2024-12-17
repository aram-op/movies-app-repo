import {Movie} from '@/app/lib/movie.model';
import {Video} from '@/app/lib/video-response.model';
import {Genre} from '@/app/lib/genre.model';
import {Series} from '@/app/lib/series.model';

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
        return await response.json();
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

export async function fetchSeriesTrailer(id: string): Promise<Video | undefined> {
    const apikey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apikey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`, options);

    if (response.ok) {
        const resp = await response.json();
        return resp.results.find((video: Video) => video.type === 'Trailer' && video.official);
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchMovieGenres(): Promise<{genres: Genre[]}> {
    const apikey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apikey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options);

    if (response.ok) {
        return await response.json();
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchSeriesGenres(): Promise<{genres: Genre[]}> {
    const apikey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apikey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?language=en`, options);

    if (response.ok) {
        return await response.json();
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchMoviesByGenre(genreId: string): Promise<Movie[]> {
    const apikey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apikey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`, options);

    if (response.ok) {
        const json = await response.json();
        return json.results;
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchSeriesByGenre(genreId: string): Promise<Series[]> {
    const apikey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apikey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=${genreId}`, options);

    if (response.ok) {
        const json = await response.json();
        return json.results;
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchMovieGenreById(id: number) {
    const result = await fetchMovieGenres();

    return result.genres.find((genre) => genre.id === id);
}

export async function fetchSeriesGenreById(id: number) {
    const result = await fetchSeriesGenres();

    return result.genres.find((genre) => genre.id === id);
}

export async function fetchSeriesDetails(id: string) {
    const apikey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apikey}`
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?append_to_response=casts&language=en-US`, options);

    if (response.ok) {
        const resp = await response.json();
        console.log(resp);
        return resp;
    }

    throw new Error(`Response Status: ${response.status}`);
}
