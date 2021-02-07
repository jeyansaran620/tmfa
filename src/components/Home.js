import React , { useState } from 'react';
import CountDown from './CountDown';
import {  Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {EnglishBenefits, TamilBenefits, EnglishThemes,
    TamilThemes, EnglishRules, TamilRules} from './Content';
import { useHistory } from "react-router";

const Home = ({tamil}) => {
    const history = useHistory();
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const Rules = tamil ? TamilRules : EnglishRules;
    const Benefits = tamil ? TamilBenefits : EnglishBenefits;
    const Themes = tamil ? TamilThemes : EnglishThemes;

        return (
            <div className="container">
                <Modal isOpen={modal} toggle={toggle} className="modal-design">
                    <ModalHeader toggle={toggle}>{tamil ? "விதிமுறைகள்" : "Rules & Regulations"} </ModalHeader>
                    <ModalBody>
                    {
                           Rules.map((points,i) =>
                            {
                                return(
                                     <div key={i} className={tamil ? "rules-point tamil ":" rules-point"}>
                                         {`${i+1}) `} {points.point}
                                     </div>
                                    );
                            })
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button className={tamil ? "modal-button tamil ":"modal-button"} onClick={() => history.push(`/Register`)}> {tamil ? "பதிவு செய்ய" : "Register"}</Button>
                    </ModalFooter>
                </Modal>
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
                    <div className="logo-tabs row text-center justify-content-around" >
                        <div className="col-10 logo-details">
                          {tamil ? "அரசினர் தொழில்நுட்பக் கல்லூரி, கோவை - 13." : "Government College of Technology, Coimbatore - 13."}
                        </div>
                        <div className="col-10 logo-details">
                        {tamil ? "தமிழ் மற்றும் நுண்கலை மன்றம்" : "Tamil Mandram and Fine Arts Club"}
                        </div>
                        <div className="col-8 logo-details col-md-6">
                          {tamil ? "நடத்தும்" : "Presents"}
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
                        <div className={tamil ? "intro-detail-tamil":"intro-detail"}>
                        <div className="intro-detail1"><b>{tamil ? "நிரல்களம்'21": "Niralkalam'21"}</b>{tamil ? "": " is "} </div>
                        <div className="intro-detail1">{tamil ? "மூன்று நாட்கள் உலகளவில்": "a three-day international "}</div>
                        <div className="intro-detail1">{tamil ? "இணையம்வழி நடைபெறும் தமிழும் ": "tamil Hackathon to provide "}</div>
                        <div className="intro-detail1">{tamil ? "தொழில்நுட்பமும் சார்ந்த போட்டி.": "technical solutions for current "}</div>
                        <div className="intro-detail1">{tamil ? "இலக்கியம், கலைகள், தமிழ் விக்கிப்பீடியா": "issues and modern problems related to "}</div>
                        <div className="intro-detail1">{tamil ? "ஆகிய மூன்றிலும் உள்ள தற்கால சிக்கல்களுக்கு": "Tamil literature,Tamil arts and Tamil Wikipedia."}</div>
                        <div className="intro-detail1">{tamil ? "தொழில்நுட்பம் கொண்டு தீர்வு காணும் ": "Our aim is to inculcate Tamil with modern "}</div>
                        <div className="intro-detail1">{tamil ? "நோக்கிலும் மாணவர்களுக்கு தமிழின் ": "technologies and to create awareness "}</div>
                        <div className="intro-detail1">{tamil ? "வளமை குறித்து விழிப்புணர்வு": "among students about the standards "}</div>
                        <div className="intro-detail1">{tamil ? "ஏற்படுத்தும் நோக்கிலும் ": "and enrichment of "}</div>
                        <div className="intro-detail1">{tamil ? "செயல்படும்.": "Tamil language."}</div>
                        </div>
                </div>   
                <div className="col-12 d-none d-lg-block col-lg-6 intro-box">
                    <div className="intro-bg-big1">
                    </div>
                    <div className="intro-bg-big2">
                    </div>
                    <div className="intro-bg-big3">
                    </div>
                    <div className={tamil ? "intro-detail-big-tamil":"intro-detail-big"}>

                        <div className="intro-detail2"><b>{tamil ? "நிரல்களம்'21": "Niralkalam'21"}</b>{tamil ? "": " is "} </div>
                        <div className="intro-detail2">{tamil ? "மூன்று நாட்கள் உலகளவில்": "a three-day international "}</div>
                        <div className="intro-detail2">{tamil ? "இணையம்வழி நடைபெறும் தமிழும் ": "tamil Hackathon to provide "}</div>
                        <div className="intro-detail2">{tamil ? "தொழில்நுட்பமும் சார்ந்த போட்டி.": "technical solutions for current "}</div>
                        <div className="intro-detail2">{tamil ? "இலக்கியம், கலைகள், தமிழ் விக்கிப்பீடியா": "issues and modern problems related to "}</div>
                        <div className="intro-detail2">{tamil ? "ஆகிய மூன்றிலும் உள்ள தற்கால சிக்கல்களுக்கு": "Tamil literature,Tamil arts and Tamil Wikipedia."}</div>
                        <div className="intro-detail2">{tamil ? "தொழில்நுட்பம் கொண்டு தீர்வு காணும் ": "Our aim is to inculcate Tamil with modern "}</div>
                        <div className="intro-detail2">{tamil ? "நோக்கிலும் மாணவர்களுக்கு தமிழின் ": "technologies and to create awareness "}</div>
                        <div className="intro-detail2">{tamil ? "வளமை குறித்து விழிப்புணர்வு": "among students about the standards "}</div>
                        <div className="intro-detail2">{tamil ? "ஏற்படுத்தும் நோக்கிலும் ": "and enrichment of "}</div>
                        <div className="intro-detail2">{tamil ? "செயல்படும்.": "Tamil language."}</div>
                         </div>
                </div>  
                </div>
                <div className="row row-main justify-content-around">
                
                    <div className="col-10 col-lg-5 offset-1 mt-2 mb-2">
                        <div className={tamil ? "prize-font-tamil":"prize-font"}>{tamil ? "30 ஆயிரம் மதிப்புள்ள ரொக்கப் பரிசு":"Cash Prize worth 30K"}</div>
                        <img className="prize-pic" href={`#k`} src="./images/cups.png" alt="hacker" />
                    </div>

                    <div className="col-10 col-lg-5 offset-1 mt-2 mb-2">
                        <div className="front-heading">{tamil ? "நிகழ்வு அட்டவணை" : "Event Schedule"}</div>
                        <div className="row justify-content-center schedule-lines">
                            <div className={`col-8 station-t4${tamil ? "-tamil" : ""} m-auto`}>{ tamil ? "நிரல்களம்(Hackathon) மார்ச் 5,6,7 அன்று நடத்தப்படும்" : "Niralkalam hacks on Mar 5,6,7"}</div>
                            <div className="col-4 station4"></div>
                        </div>
                        <div className="row justify-content-center schedule-lines">
                            <div className="col-4 station3"></div>
                            <div className={`col-8 station-t3${tamil ? "-tamil" : ""} m-auto`}>{tamil ? "நிரல்களம்(Hackathon) முதல் அமர்வு பிப்ரவரி 26" : "Niralkalam first session on Feb 26"}</div>
                        </div>
                        <div className="row justify-content-center schedule-lines">
                            <div className={`col-8 station-t2${tamil ? "-tamil" : ""} m-auto`}>{tamil ? "பதிவு பிப்ரவரி 25 அன்று நிறைவடைகிறது" : "Registration closes on Feb 25"}</div>
                            <div className="col-4 station2"></div>
                        </div>
                        <div className="row justify-content-center schedule-lines">
                            <div className="col-4 station1"></div>
                            <div className={`col-8 station-t1${tamil ? "-tamil" : ""} m-auto`}>{tamil ? "பதிவு பிப்ரவரி 10 ஆம் தேதி திறக்கப்படும்" : " Registration opens on Feb 10"}</div>
                        </div>
                        <img className="spaceship" href={`#k`} src="./images/spaceship.png" alt="hacker" />
                    </div>
                   
                </div>
                
                <div className="row row-main justify-content-around">
                    <div className="col-10 col-lg-5 offset-1 mt-2 mb-2">
                        <CountDown tamil={tamil} />
                    </div>
                    <div className="col-10 col-lg-5 offset-1 mt-2 mb-2">
                        <div className="front-heading">  {tamil ? "கருப்பொருள்கள்:": "Themes:"}</div>
                        {
                            Themes.map((points,i) =>
                            {
                                return(
                                    
                                     <div key={i} className="theme row">
                                        <div className={`theme-heading${tamil ? "-tamil" : ""} col-12 col-lg-2`}>{points.heading}</div>
                                        <div className={`theme-detail${tamil ? "-tamil" : ""} col-12 col-lg-10`}>{points.detail}</div>
                                     </div>
                                    );
                            })
                        }
                    </div>
                </div>
                <div className="row row-main justify-content-around">
                    <div className="col-10 col-lg-5 benefits offset-1 mt-2 mb-2">
                        <div className="front-heading"> {tamil ? "பயன்கள்:": "Benefits:"}</div>
                        {
                            Benefits.map((points,i) =>
                            {
                                return(
                                     <div key={i} className={`benefit-point${tamil ? " tamil" : ""}`}>
                                         * {points.point}
                                     </div>
                                    );
                            })
                        }
                    </div>
                    <div className="col-10 col-lg-5 text-center offset-1 mt-2 mb-2">
                        <Button className="rules-font" onClick={toggle} >{tamil ? "விதிகளை அறிவீர்கள்?": "Know the Rules?"}</Button>
                        <img className="rules-pic" href={`#k`} src="./images/question.png" alt="hacker" />
                    </div>
                </div>
        </div>
        );
}

export default Home;