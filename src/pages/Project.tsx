import { useParams } from "react-router-dom";

import NotFound from '../pages/NotFound';
import Title from '../components/Title';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import projectsData from '../data/projects';

function ProjectPage() {
    const { projectId } = useParams();

    const project = projectsData.find(project => project.href.endsWith(projectId || ""));

    if (!project) {
        return (
            <NotFound />
        );
    }

    const Page = project.component;

    return (
        <>
            <Title>{project.title} - Cooper Ericksen</Title>

            <Nav />

            <Banner title={project.title} />
            <Page />

            <Footer />
        </>
    )
}

export default ProjectPage;