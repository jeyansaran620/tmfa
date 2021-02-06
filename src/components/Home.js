import React from 'react';
import CountDown from './CountDown';
import {  Button } from 'reactstrap';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            EnglishBenefits: [
                        {
                            point:"Attractive Cash Prizes worth Rs.30K."
                        },
                        {
                            point:"Participation Certificate for all teams."
                        },
                        {
                            point:" Each team will be guided by an expert throughout their project. "
                        },
                        {
                            point:"Participants can attend free technical workshops and webinars conducted in the Hackathon."
                        },
                        {
                            point:"Continuous expert's guidance throughout the Hackathon in various fields such as AI,Machine Learning..etc"
                        },
                        {
                            point:"The best projects will have a chance to develop their project further with the help and funds provided by  INFITT."
                        }],

            TamilBenefits: [
                        {
                            point:"வெற்றியாளர்களுக்கு 30000 வரை பரிசுத்தொகை."
                        },
                        {
                            point:"பங்கேற்பாளர்கள் அனைவருக்கும்  சான்றிதழ்."
                        },
                        {
                            point:"ஒவ்வொரு அணிக்கும் நிரல்களம் முடியும்வரை தொழில்நுட்ப வல்லுநரின் வழிகாட்டுதல்."
                        },
                        {
                            point:"சிறந்த தொழில்நுட்ப வல்லுநர்களின் தொழில்நுட்பம் சார்ந்த இணைய வகுப்புகள்."
                        },
                        {
                            point:"செயற்கை நுண்ணறிவு(AI), பொறி கற்றல்(ML) போன்ற துறைகளில் வல்லுநர்களின் வழிகாட்டல்கள்."
                        },
                        {
                            point:" சிறந்த திட்டங்களை(projects) மேன்மேலும் செம்மைப்படுத்த INFITT ன் வழிகாட்டுதல் மற்றும் நிதியுதவி."
                        }],
            EnglishThemes: [
                        {
                            heading:"Tamil Arts",
                            detail:"This covers the Problems that are based on various tamil Art forms such as martial arts, folk arts, theatre, sculptures, paintings etc."
                        },
                        {
                            heading:"Tamil Literature",
                            detail:"This covers the solutions for the various problems that occur and platforms to develop tamil literature through technologies."
                        },
                        {
                            heading:"Tamil in Wikipedia",
                            detail:"This covers various projects that are available in tamil wikipedia, to get a working solution for those problems."
                        }
                        ]

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
                        <div className="intro-detail1"><b>Niralkalam'21</b> is </div>
                        <div className="intro-detail1">a three-day international </div>
                        <div className="intro-detail1">tamil Hackathon to provide </div>
                        <div className="intro-detail1">technical solutions for current </div>
                        <div className="intro-detail1">issues and modern problems related to </div>
                        <div className="intro-detail1">Tamil literature,Tamil arts and Tamil Wikipedia.</div>
                        <div className="intro-detail1">Our aim is to inculcate Tamil with modern </div>
                        <div className="intro-detail1">technologies and to create awareness </div>
                        <div className="intro-detail1">among students about the standards </div>
                        <div className="intro-detail1">and enrichment of </div>
                        <div className="intro-detail1">Tamil language.</div>
                        </div>
                </div>   
                <div className="col-12 d-none d-lg-block col-lg-6 intro-box">
                    <div className="intro-bg-big1">
                    </div>
                    <div className="intro-bg-big2">
                    </div>
                    <div className="intro-bg-big3">
                    </div>
                    <div className="intro-detail-big">
                        <div className="intro-detail2"><b>Niralkalam'21</b> is </div>
                        <div className="intro-detail2">a three-day international </div>
                        <div className="intro-detail2">tamil Hackathon to provide </div>
                        <div className="intro-detail2">technical solutions for current </div>
                        <div className="intro-detail2">issues and modern problems related to </div>
                        <div className="intro-detail2">Tamil literature,Tamil arts and Tamil Wikipedia.</div>
                        <div className="intro-detail2">Our aim is to inculcate Tamil with modern </div>
                        <div className="intro-detail2">technologies and to create awareness </div>
                        <div className="intro-detail2">among students about the standards </div>
                        <div className="intro-detail2">and enrichment of </div>
                        <div className="intro-detail2">Tamil language.</div>
                         </div>
                </div>  
                </div>
                <div className="row row-main justify-content-around">
                
                    <div className="col-10 col-lg-5 offset-1 mt-2 mb-2">
                        <div className="prize-font">Cash Prize worth 30K</div>
                        <img className="prize-pic" href={`#k`} src="./images/cups.png" alt="hacker" />
                    </div>

                    <div className="col-10 col-lg-5 offset-1 mt-2 mb-2">
                        <div className="front-heading">Event Schedule</div>
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
                
                <div className="row row-main justify-content-around">
                    <div className="col-10 col-lg-5 offset-1 mt-2 mb-2">
                        <CountDown />
                    </div>
                    <div className="col-10 col-lg-5 offset-1 mt-2 mb-2">
                        <div className="front-heading">Themes</div>
                        {
                            this.state.EnglishThemes.map((points,i) =>
                            {
                                return(
                                     <div key={i} className="theme row">
                                        <div className="theme-heading col-12 col-lg-2">{points.heading}</div>
                                        <div className="theme-detail col-12 col-lg-10">{points.detail}</div>
                                     </div>
                                    );
                            })
                        }
                    </div>
                </div>
                <div className="row row-main justify-content-around">
                    <div className="col-10 col-lg-5 benefits offset-1 mt-2 mb-2">
                        <div className="front-heading">Benefits:</div>
                        {
                            this.state.EnglishBenefits.map((points,i) =>
                            {
                                return(
                                     <div key={i} className="benefit-point">
                                         * {points.point}
                                     </div>
                                    );
                            })
                        }
                    </div>
                    <div className="col-10 col-lg-5 text-center offset-1 mt-2 mb-2">
                        <Button className="rules-font">Know the Rules?</Button>
                        <img className="rules-pic" href={`#k`} src="./images/question.png" alt="hacker" />
                    </div>
                </div>
        </div>
        )
    }
}

export default Home;