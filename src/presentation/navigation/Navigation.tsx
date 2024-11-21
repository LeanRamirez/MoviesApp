import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';

export type RootStackParams = {
    Home: undefined;
    Detail: { movieId: number }
}
const Stack = createStackNavigator<RootStackParams>();


export const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailsScreen} />
        </Stack.Navigator>
    );
}