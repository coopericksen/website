import Nav from '../components/Nav';
import WelcomeBanner from '../components/WelcomeBanner';
import ElementSizes from '../components/ElementSizes';
import Footer from '../components/Footer';

function IndexPage() {
    return (
        <>
            <Nav />
            <WelcomeBanner />
            <a href="https://legacy.coopericksen.com">Link to old site</a>
            <ElementSizes />
            <Footer />
        </>
    )
}

export default IndexPage;