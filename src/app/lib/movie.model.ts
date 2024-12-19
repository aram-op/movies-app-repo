export interface Movie {
    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    runtime?: number;
    spoken_languages?: [
        {
            english_name: string,
            iso_639_1: string,
            name: string
        }
    ];
    status?: string;
    genres?: [
        {
            id: number,
            name: string
        }
    ],
    casts?: {
        cast: Cast[]
    },
    tagline?: string;
    homepage?: string;
}

export interface Cast {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string;
}
