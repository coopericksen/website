import '../styles/Footer.css';

function Footer() {
    return(
        <footer>
            <div className='footer-elgroup'>
                <h4>Links</h4>
                <a href="https://github.com/coopericksen/website" target='_blank'>Github Repository</a>
                <a href="https://legacy.coopericksen.com" target='_blank'>Old Site</a>
            </div>

            <div className="footer-nav">
                <a href="/">Home</a>
                <a href="/tools">Tools</a>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
            </div>
        </footer>
    )
}

export default Footer;