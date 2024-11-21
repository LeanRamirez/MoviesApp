import React, { useEffect, useState } from 'react'
import { Movie } from '../../core/entities/movie.entity'

import * as useCases from '../../core/use-cases'
import { movieDBFetcher } from '../../config/adapters/MovieDB.adapter'

let popularPage = 1;
let topRatedPage = 1;
let upComingPage = 1;

export const UseMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);


    useEffect(() => {
        initialLode();
    }, [])

    const initialLode = async () => {

        const nowPlayingPropmise = await useCases.NowPlayingUseCase(movieDBFetcher)
        const popularPropmise = await useCases.moviesPopularUseCase(movieDBFetcher)
        const topRatedPropmise = await useCases.moviesTopRatedUseCase(movieDBFetcher)
        const upcomingPropmise = await useCases.moviesUpcomingUseCase(movieDBFetcher)

        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies
        ] = await Promise.all([
            nowPlayingPropmise,
            popularPropmise,
            topRatedPropmise,
            upcomingPropmise
        ]);

        setNowPlaying(nowPlayingMovies)
        setPopular(popularMovies)
        setTopRated(topRatedMovies)
        setUpcoming(upcomingMovies)

        setIsLoading(false);


    }

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,

        //metodos

        popularNextPage: async () => {
            popularPage++
            const popularMovies = await useCases.moviesPopularUseCase(movieDBFetcher, {
                page: popularPage
            })
            setPopular(prev => [...prev, ...popularMovies])
        },

        topRatedNextPage: async () => {
            topRatedPage++
            const topRated = await useCases.moviesTopRatedUseCase(movieDBFetcher, {
                page: topRatedPage
            })
            setTopRated(prev => [...prev, ...topRated])
        },

        upComingNextPage: async () => {
            upComingPage++
            const upcoming = await useCases.moviesUpcomingUseCase(movieDBFetcher, {
                page: upComingPage
            })
            setTopRated(prev => [...prev, ...upcoming])
        }

    }
}
