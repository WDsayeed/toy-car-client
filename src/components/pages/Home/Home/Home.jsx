
import useTitle from '../../../../hooks/useTitle';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Contact from '../../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import ShopTab from '../Tab/ShopTab';

const Home = () => {
        useTitle('Home')
        return (
                <div>
                        <Banner></Banner>
                        <Gallery></Gallery>
                        <ShopTab></ShopTab>
                        <About></About>
                        <Contact></Contact>
                </div>
        );
};

export default Home;