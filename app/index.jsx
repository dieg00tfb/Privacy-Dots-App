// redirects users to the homepage when the compenets is rendered
import { Redirect } from 'expo-router'

const StartPage = () => {
    return <Redirect href='/home'/>;
};

export default StartPage;
