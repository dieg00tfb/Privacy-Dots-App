// route layout for the home folder

import { Stack } from 'expo-router';

const StackLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="index"
                options={{
                    headerTitle: 'Home Screen'
                }}
            />
        </Stack>
    );
};

export default StackLayout