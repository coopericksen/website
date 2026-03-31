import Nav from '../components/Nav';
import Card from '../components/Card';
import Footer from '../components/Footer';

import toolsData from '../data/tools';

function ToolsPage() {
    const toolElements = toolsData.map((tool, index) => {
        return (
            <Card
                key={index}
                {...tool}
            />
        )
    });

    return (
        <>
            <Nav />

            <h1>Tools</h1>

            <section className='card-grid'>
                {toolElements}
            </section>

            <Footer />
        </>
    )
}

export default ToolsPage;