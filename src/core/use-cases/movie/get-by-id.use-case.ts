import { MovieDBMovie } from "../../../infrastructure/interfaces/movie-db.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { fullMovie } from "../../entities/movie.entity";
import { HttpAdapter } from "../../http/http.adapter";


export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<fullMovie> => {
    try {
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);

        const fullMovie = MovieMapper.fromMovieDBToEntity(movie)

        return fullMovie;

    } catch (error) {
        throw new Error(`Cannot get movie by id: ${movieId}`)
    }
}