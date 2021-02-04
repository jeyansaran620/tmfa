import React from 'react';
import MainForm from './MainForm';
import CountDown from './CountDown';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render()
    {
        return (
            <div className="container">
                <div className="row">
                <div className="col-12 col-lg-6 logo-box">
                    <div className="logo-tabs row justify-content-around" >
                    <div className="col-12 text-center col-md-4">
                            <img className="logo-sp" href={`#k`} src="./images/tmfa.png" alt="hacker" />
                        </div>
                        <div className="col-6 text-center col-md-4">
                            <img className="logo-sp" href={`#k`} src="./images/gct.png" alt="hacker" />
                        </div>
                        <div className="col-6 text-center col-md-4">
                            <img className="logo-sp" href={`#k`} src="./images/infitt.png" alt="hacker" />
                        </div>
                    </div>
                    <img className="logo-bl" href={`#k`} src="./images/logo-below.png" alt="hacker" />
                    <img className="logo" href={`#k`} src="./images/logo.png" alt="hacker" />
                </div>
                </div>
        </div>
        )
    }
}

export default Home;