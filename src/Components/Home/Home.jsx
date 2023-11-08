import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import FeatureFood from "./Feature Food/FeatureFood";
import Feature from "./Feature/Feature";
import HomeFeature from "./HomeFeature/HomeFeature";
import Faq from "./FAQ/Faq";
import Review from "./Review/Review";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Share2Savor | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeatureFood></FeatureFood>
            <HomeFeature></HomeFeature>
            <Feature></Feature>
            <Faq></Faq>
            <Review></Review>



        </div>
    );
};

export default Home;