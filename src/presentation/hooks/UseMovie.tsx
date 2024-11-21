import React, { useEffect, useState } from 'react'
import * as useCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/MovieDB.adapter';
import { fullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';



export const UseMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<fullMovie>()
    const [cast, setCast] = useState<Cast[]>()

    useEffect(() => {
        loadMovie();
    }, [movieId]);

    const loadMovie = async () => {
        setIsLoading(true)

        const fullMoviePropmise = useCases.getMovieByIdUseCase(movieDBFetcher, movieId)
        const castPromise = useCases.getMovieCastUseCase(movieDBFetcher, movieId)

        const [fullMovie, cast] = await Promise.all([fullMoviePropmise, castPromise])

        setMovie(fullMovie);
        setCast(cast)
        setIsLoading(false)


    }



    return {
        isLoading,
        movie,
        cast,
    }
}
