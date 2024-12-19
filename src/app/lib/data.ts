import {Movie} from '@/app/lib/movie.model';
import {Video} from '@/app/lib/video-response.model';
import {Genre} from '@/app/lib/genre.model';
import {createPool} from '@vercel/postgres';
import {Series} from '@/app/lib/series.model';

const apikey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apikey}`
    }
};

const pool = createPool({
    connectionString: process.env.NEXT_PUBLIC_POSTGRES_URL,
});

export async function fetchTrendingMovies(): Promise<Movie[]> {
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options);

    if (response.ok) {
        const json = await response.json();
        return json.results;
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchTopRatedMovies(page: number): Promise<Movie[]> {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`, options);

    if (response.ok) {
        const json = await response.json();
        return json.results;
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchPopularMovies(page: number): Promise<Movie[]> {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options);

    if (response.ok) {
        const json = await response.json();
        return json.results;
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchMovieDetails(id: string) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=casts&language=en-US`, options);

    if (response.ok) {
        return await response.json();
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchMovieTrailer(id: string): Promise<Video | undefined> {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);

    if (response.ok) {
        const res = await response.json();
        return res.results.find((video: Video) => video.type === 'Trailer' && video.official);
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchSeriesTrailer(id: string): Promise<Video | undefined> {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`, options);

    if (response.ok) {
        const res = await response.json();
        return res.results.find((video: Video) => video.type === 'Trailer' && video.official);
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchMovieGenres(): Promise<{ genres: Genre[] }> {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options);

    if (response.ok) {
        return await response.json();
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchSeriesGenres(): Promise<{ genres: Genre[] }> {
    const response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?language=en`, options);

    if (response.ok) {
        return await response.json();
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchMoviesByGenre(genreId: string, page: number) {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}&with_genres=${genreId}`, options);

    if (response.ok) {
        return await response.json();
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchSeriesByGenre(genreId: string, page: number) {
    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?page=${page}&with_genres=${genreId}`, options);

    if (response.ok) {
        return await response.json();
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
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?append_to_response=casts&language=en-US`, options);

    if (response.ok) {
        return await response.json();
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchMoviesBySearch(query: string, page: number) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=${page}`, options);

    if (response.ok) {
        return await response.json();
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function fetchSeriesBySearch(query: string, page: number) {
    const response = await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}&language=en-US&page=${page}`, options);

    if (response.ok) {
        return await response.json();
    }

    throw new Error(`Response Status: ${response.status}`);
}

export async function addMovieBookmark(movieId: number, userEmail: string) {
    try {
        const result = await pool.sql`
            INSERT INTO bookmarked_movies (movie_id, user_email)
             VALUES
             (${movieId}, ${userEmail})
             ON CONFLICT (id) DO NOTHING;
        `;
        return result.rows[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to add bookmark.')
    }
}

export async function fetchBookmarkedMovies(userEmail: string): Promise<Movie[]> {
    try {
        const movieIds = await pool.sql<{ movie_id: number }>`
            SELECT movie_id FROM bookmarked_movies WHERE user_email = ${userEmail};
        `;

        return await fetchMoviesByIds(movieIds.rows);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch todos.');
    }
}

export async function fetchMoviesByIds(data: { movie_id: number }[]): Promise<Movie[]> {
    const movies: Movie[] = [];

    for (const item of data) {
        movies.push(await fetchMovieDetails(item.movie_id.toString()));
    }

    return movies;
}

export async function addSeriesBookmark(seriesId: number, userEmail: string) {
    try {
        const result = await pool.sql`
            INSERT INTO bookmarked_series (series_id, user_email)
             VALUES
             (${seriesId}, ${userEmail})
             ON CONFLICT (id) DO NOTHING;
        `;
        return result.rows[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to add bookmark.')
    }
}

export async function fetchBookmarkedSeries(userEmail: string): Promise<Series[]> {
    try {
        const seriesIds = await pool.sql<{ series_id: number }>`
            SELECT series_id FROM bookmarked_series WHERE user_email = ${userEmail};
        `;

        return await fetchSeriesByIds(seriesIds.rows);

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch todos.');
    }
}

export async function fetchSeriesByIds(data: { series_id: number }[]): Promise<Series[]> {
    const results: Series[] = [];

    for (const item of data) {
        results.push(await fetchSeriesDetails(item.series_id.toString()));
    }

    return results;
}
