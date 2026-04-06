import { useParams } from "react-router-dom";

import NotFound from '../pages/NotFound';
import Title from '../components/Title';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import toolsData from '../data/tools';

function ProjectPage() {
    const { toolId } = useParams();

    const tool = toolsData.find(tool => tool.href.endsWith(toolId || ""));

    if (!tool) {
        return (
            <NotFound />
        );
    }

    const Page = tool.component;

    return (
        <>
            <Title>{tool.title} - Cooper Ericksen</Title>

            <Nav />

            <Banner title={tool.title} />
            <Page />

            <Footer />
        </>
    )
}

export default ProjectPage;