import { HttpAdapter } from "../../http/http.adapter";
import { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db.response';
import type { Movie } from "../../entities/movie.entity";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";


export const NowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {

        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

        return nowPlaying.results.map(MovieMapper.FromMovieDBResultToEntity);



    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - NowPLaying')
    }
}