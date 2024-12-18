import React from 'react'
import { View, ScrollView, Text } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity'
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    height?: number;
}

export const PosterCarrusel = ({ height = 440, movies }: Props) => {
    return (
        <View style={{ height }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    movies.map(movie => <MoviePoster key={movie.id} movie={movie} />)
                }
            </ScrollView>
        </View>
    )
}
