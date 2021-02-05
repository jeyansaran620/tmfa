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
                <div className="row row-main">
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
                    <img className="logo-bl" href={`#k`} src="./images/logo-bg.png" alt="hacker" />
                    <img className="logo" href={`#k`} src="./images/logo.png" alt="hacker" />
                </div>
                
                <div className="col-12 d-lg-none col-lg-6 intro-box-small">
                    <div className="intro-bg1">
                    </div>
                    <div className="intro-bg2">
                    </div>
                    <div className="intro-bg3">
                    </div>
                        <div className="intro-detail">
                        <h3>hello</h3>
                         </div>
                </div>   
                <div className="col-12 d-none d-lg-block col-lg-6 intro-box">
                    <div className="intro-bg-big1">
                    </div>
                    <div className="intro-bg-big2">
                    </div>
                    <div className="intro-bg-big3">
                    </div>
                        <div className="intro-detail">
                        <h3>hello</h3>
                         </div>
                </div>  
                </div>
                <div className="row row-main justify-content-around">
                    <div className="col-10 col-lg-5 schedule offset-1">
                        <div className="row justify-content-center schedule-lines">
                            <div className="col-8 station-t4 m-auto">Niralkalam hacks on Mar 5,6,7</div>
                            <div className="col-4 station4"></div>
                        </div>
                        <div className="row justify-content-center schedule-lines">
                            <div className="col-4 station3"></div>
                            <div className="col-8 station-t3 m-auto">Niralkalam first session on Feb 26</div>
                        </div>
                        <div className="row justify-content-center schedule-lines">
                            <div className="col-8 station-t2 m-auto">Registration closes on Feb 25</div>
                            <div className="col-4 station2"></div>
                        </div>
                        <div className="row justify-content-center schedule-lines">
                            <div className="col-4 station1"></div>
                            <div className="col-8 station-t1 m-auto">Registration open on Feb 10</div>
                        </div>
                        <img className="spaceship" href={`#k`} src="./images/spaceship.png" alt="hacker" />
                    </div>
                   
                </div>
        </div>
        )
    }
}

export default Home;