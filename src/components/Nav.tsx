import '../styles/Nav.css';

function Nav() {
    return (
        <nav>
            <a className="nav-link" id="nav-logo-container" href="/"><img id="nav-logo" src="./logo.png" alt="coopericksen's logo" /></a>
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/tools">Tools</a>
            <a className="nav-link" href="/projects">Projects</a>
            <a className="nav-link" href="/about">About</a>
        </nav>
    )
}

export default Nav;