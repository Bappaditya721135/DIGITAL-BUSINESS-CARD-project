import Info from "./Info";
import About from "./About";
import Interests from "./Interests";

export default function Main() {
    return (
        <div className="main-container">
            <Info />
            <About />
            <Interests />
        </div>
    );
}