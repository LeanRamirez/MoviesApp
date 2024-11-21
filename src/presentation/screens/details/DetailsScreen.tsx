import { useRoute } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation';
import { UseMovie } from '../../hooks/UseMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { FullScreenLoader } from '../../components/loader/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { };

export const DetailsScreen = ({ route }: Props) => {

    // const { movieId } = useRoute().params;
    const { movieId } = route.params

    const { isLoading, movie, cast = [] } = UseMovie(movieId)

    if (isLoading) {
        return (<FullScreenLoader />)
    }

    return (
        <ScrollView>

            <MovieHeader
                originalTitle={movie!.originalTitle}
                title={movie!.title}
                poster={movie!.poster}
            />


            <MovieDetails movie={movie!} cast={cast} />
        </ScrollView>
    )
}