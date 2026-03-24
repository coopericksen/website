import Nav from '../components/Nav';
import Header from '../components/Header';
import ElementSizes from '../components/ElementSizes';

function IndexPage() {
    return (
        <>
            <Nav />
            <Header />
            <a href="https://legacy.coopericksen.com">Link to old site</a>
            <ElementSizes />
        </>
    )
}

export default IndexPage;