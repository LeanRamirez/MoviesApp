import { HttpAdapter } from "../../http/http.adapter";
import { MovieDBResponse } from '../../../infrastructure/interfaces/movie-db.response';
import type { Movie } from "../../entities/movie.entity";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

interface Options {
    page?: number;
    limit?: number;
}


export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        // console.log({ page: options?.page ?? 1 });
        const popular = await fetcher.get<MovieDBResponse>('/popular', {
            params: {
                page: options?.page ?? 1,

            }
        });

        return popular.results.map(MovieMapper.FromMovieDBResultToEntity);



    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - popular')
    }
}