import twitter from '../img/twitter.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import linkdin from '../img/linkdin.png';
import git from '../img/github.png';

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="profile-links">
                <a className="twitter-link user-links" href="#">
                    <img className="twitter-logo" src={twitter} alt="twitter logo" />
                </a>
                <a className="facebook-link user-links" href="#">
                    <img className="facebook-logo" src={facebook} alt="facebook logo" />
                </a>
                <a className="instagram-link user-links" href="#">
                    <img className="instagram-logo" src={instagram} alt="instagram logo" />
                </a>
                <a className="linkdin-link user-links" href="#">
                    <img className="linkdin-logo" src={linkdin} alt="linkdin logo" />
                </a>
                <a className="github-link user-links" href="https://github.com/Bappaditya721135">
                    <img className="git-logo" src={git} alt="github logo" />
                </a>
            </ul>
        </footer>
    );
}