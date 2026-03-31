import { useParams } from "react-router-dom";

import Nav from '../components/Nav';
import Footer from '../components/Footer';

function ProjectPage() {
    const { projectId } = useParams();

    return (
        <>
            <Nav />
            <h1>{projectId}</h1>
            <Footer />
        </>
    )
}

export default ProjectPage;