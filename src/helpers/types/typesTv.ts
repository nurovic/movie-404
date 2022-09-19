
export type TMovie = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: false
    vote_average: number,
    vote_count: number
}

export type TtvId  = {
    adult: boolean,
    backdrop_path: string,
    created_by: [],
    episode_run_time: [],
    first_air_date: string,
    genres: [],
    homepage: string,
    id: number,
    in_production: boolean,
    languages: [],
    last_air_date: string,
    last_episode_to_air: {},
    name: string,
    next_episode_to_air: null,
    networks: [],
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: [],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: [],
    production_countries: [],
    seasons: TSeasons[],
    spoken_languages: [],
    status: string,
    tagline: string,
    type: string,
    vote_aveage: number,
    vote_count: number

}

export type TSeasons  = {
    air_date: string,
    episode_count: number,
    id: number,
    name: string,
    overview: string,
    poster_path: string,
    season_number: number

}