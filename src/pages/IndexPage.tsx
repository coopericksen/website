import Nav from '../components/Nav';
import WelcomeBanner from '../components/WelcomeBanner';
import LiveClock from '../components/LiveClock';
import Footer from '../components/Footer';

function IndexPage() {
    return (
        <>
            <Nav />
            <WelcomeBanner />
            <LiveClock />
            <Footer />
        </>
    )
}

export default IndexPage;