
import MainForm from './MainForm';

const Register = ({tamil}) => {

    if( new Date() > new Date("2021-02-26"))
    {
        return (
            <div className="register">
                <div className="register-info">{tamil ? "பதிவு மூடப்பட்டது !!!": "Registration has been closed!!!"}</div>
                <div className="register-info" >{tamil ? "நீங்கள் ஆர்வமாக இருந்தால், எங்களை தொடர்பு கொள்ளவும்🤩": "If you are very much Interested, Contact Us🤩"}</div>
                <img className="logo" href={`#k`} src="./images/expired.png" alt="hacker" />
            </div>
        );
    }
    else if( new Date() < new Date("2021-02-09"))
    {
        return(
            <div className="register">
                <div className="register-info" >{tamil ? "பதிவு இன்னும் தொடங்கப்படவில்லை !!!": "Registration not yet started!!!"}</div>
                <div className="register-info" >{tamil ? "10.02.2021🤩 அன்று வாருங்கள்": "Come back on 10.02.2021🤩"}</div>
                <img className="logo" href={`#k`} src="./images/waiting.png" alt="hacker" />
            </div>
        );
    }
  return (
    <MainForm tamil={tamil}/>
  );
}

export default Register;
