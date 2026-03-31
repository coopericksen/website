import Nav from '../components/Nav';
import WelcomeBanner from '../components/WelcomeBanner';
import ElementSizes from '../components/ElementSizes';
import Footer from '../components/Footer';

function IndexPage() {
    return (
        <>
            <Nav />
            <WelcomeBanner />
            <a href="https://legacy.coopericksen.com"><h3>Link to old site</h3></a>
            <ElementSizes />
            <Footer />
        </>
    )
}

export default IndexPage;