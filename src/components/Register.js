
import MainForm from './MainForm';

const Register = () => {
    if(false && new Date() > new Date("2021-02-26"))
    {
        return (
            <div className="register">
                <div className="register-info" >Registration has been closed!!!</div>
                <div className="register-info" >If you are very much Interested, Contact Us🤩</div>
                <img className="logo" href={`#k`} src="./images/expired.png" alt="hacker" />
            </div>
        );
    }
    else if(false && new Date() < new Date("2021-02-10"))
    {
        return(
            <div className="register">
                <div className="register-info" >Registration not yet started!!!</div>
                <div className="register-info" >Come back on 10.02.2021🤩</div>
                <img className="logo" href={`#k`} src="./images/waiting.png" alt="hacker" />
            </div>
        );
    }
  return (
    <MainForm />
  );
}

export default Register;
