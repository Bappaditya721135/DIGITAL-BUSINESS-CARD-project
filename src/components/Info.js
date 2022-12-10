// This is the info component where img name button will be shown 
import mail from '../img/minimail.png';
import linkdin from '../img/linkdin.png';

export default function Info() {
    return (
        <div className="info-container">
            <h3 className="info-name">Saitama</h3>
            <p className="info-job">Front-end developer</p>
            <div className="btn-container">
                <button className="mail info-btn">
                    <img src={mail} alt="mail-logo" />
                    <p>Email</p>
                </button>
                <button className="mini-linkdin info-btn">
                    <img className='mini-linkdin-logo' src={linkdin} alt="linkidin-logo" />
                    <p>Linkdin</p>
                </button>
            </div>
        </div>
    );
}