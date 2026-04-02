import { useParams } from "react-router-dom";

import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import projectsData from '../data/projects';

function ProjectPage() {
    const { projectId } = useParams();

    const project = projectsData.find(project => project.href.endsWith(projectId || ""));

    if (!project) {
        return (
            <>
                <h1>Error 404</h1>
                <h2>Unable to find {projectId}</h2>
            </>
        );
    }

    const Page = project.component;

    return (
        <>
            <Nav />

            <Banner title={project.title} />
            <Page />

            <Footer />
        </>
    )
}

export default ProjectPage;