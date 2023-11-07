import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import FeatureFood from "./Feature Food/FeatureFood";
import Feature from "./Feature/Feature";
import FramerMotion from "./FramerMotion";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Share2Savor | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeatureFood></FeatureFood>
            <FramerMotion></FramerMotion>
            <Feature></Feature>


        </div>
    );
};

export default Home;