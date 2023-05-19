
import useTitle from '../../../../hooks/useTitle';
import Banner from '../../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopTab from '../Tab/ShopTab';

const Home = () => {
        useTitle('Home')
        return (
                <div>
                        <Banner></Banner>
                        <Gallery></Gallery>
                        <ShopTab></ShopTab>
                </div>
        );
};

export default Home;