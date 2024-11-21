import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { UseMovies } from '../../hooks/UseMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PosterCarrusel } from '../../components/movies/PosterCarrusel'
import { HorizontalCarrusel } from '../../components/movies/HorizontalCarrusel'
import { FullScreenLoader } from '../../components/loader/FullScreenLoader'

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage, topRatedNextPage, upComingNextPage } = UseMovies();

    if (isLoading) {
        return (<FullScreenLoader />)
    }



    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>

                <PosterCarrusel
                    movies={nowPlaying}
                />

                <HorizontalCarrusel
                    movies={popular}
                    title='Populares'
                    loadNextPage={popularNextPage}
                />

                <HorizontalCarrusel
                    movies={topRated}
                    title='Mejor calificadas'
                    loadNextPage={topRatedNextPage}
                />

                <HorizontalCarrusel
                    movies={upcoming}
                    title='Proximamente'
                    loadNextPage={upComingNextPage}
                />
            </View>
        </ScrollView>
    )
}

