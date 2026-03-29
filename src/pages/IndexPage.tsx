import Nav from '../components/Nav';
import WelcomeBanner from '../components/WelcomeBanner';
import ElementSizes from '../components/ElementSizes';

function IndexPage() {
    return (
        <>
            <Nav />
            <WelcomeBanner />
            <a href="https://legacy.coopericksen.com">Link to old site</a>
            <ElementSizes />
        </>
    )
}

export default IndexPage;