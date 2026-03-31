import { useParams } from "react-router-dom";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import toolsData from '../data/tools';

function ProjectPage() {
    const { toolId } = useParams();

    const tool = toolsData.find(tool => tool.href.endsWith(toolId || ""));

    if (!tool) {
        return (
            <>
                <h1>Error 404</h1>
                <h2>Unable to find {toolId}</h2>
            </>
        );
    }

    return (
        <>
            <Nav />

            <h1>{toolId}</h1>
            <p>{tool.title}</p>

            <Footer />
        </>
    )
}

export default ProjectPage;