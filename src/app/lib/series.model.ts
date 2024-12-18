import {Genre} from '@/app/lib/genre.model';
import {Cast} from '@/app/lib/movie.model';

export interface Series {
    backdrop_path: string;
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
    media_type: string;
    genres?: Genre[];
    homepage?: string;
    spoken_languages?: [
        {
            english_name: string,
            iso_639_1: string,
            name: string
        }
    ];
    last_air_date?: string;
    status?: string;
    tagline?: string;
    casts?: {
        cast: Cast[]
    };
}
