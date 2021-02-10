import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({tamil}) =>{
    
const  Items = tamil ?  [ 
    {
        content:"நிரல்களம்'21",
        link:"NiralKalam"
    },
    {
        content:"பதிவு செய்ய",
        link:"Register"
    },
    {
        content:"எங்களை பற்றி",
        link:"AboutUs"
    }
] : [ 
    {
        content:"NiralKalam",
        link:"NiralKalam"
    },
    {
        content:"Register",
        link:"Register"
    },
    {
        content:"About us",
        link:"AboutUs"
    }
] 
    return ( 
        <div className="footer">
            <div className="container">       
                <div  className="row row-main justify-content-center"> 
                    <div className="col-12 col-sm-6">
                        <div className="row justify-content-center">   
                            {
                                Items.map((item, i) => {
                                    return(
                                        <div key={i} className="btn">
                                            <Link to={`/${item.link}`}>{item.content}</Link>
                                        </div>  
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="text-center h6" id="ContactUs">{tamil ? "தொடர்புக்கு" : "Contact Us"}</div>
                        <div className="row justify-content-around text-center">
                            <a className="btn" href="tel:+918825670247"><span className={`fa fa-phone fa-lg`}></span> <strong>{tamil ? " பொதுச்செயலர்" : " general secretary"}</strong></a>
                            <a className="btn" href="tel:+917397087908"><span className={`fa fa-mobile fa-lg`}></span> <strong>{tamil ? " பொருளாளர்" : " treasurer"}</strong></a>
                            <a className="btn fa fa-envelope fa-lg" href="mailto:manavarmandramgct@gmail.com"> </a>
                            <a className="btn fa fa-instagram fa-lg" href="https://www.instagram.com/tmfa_gct/?hl=en"> </a>
                            <a className="btn fa fa-facebook fa-lg" href="https://www.facebook.com/tmfagct/?hc_ref=ARTFvEoDpDB7_-HzKgenlzxfrdrlUNLcoe2AJK2g5-cz7wBu_tGcVawMlAEYjJKKslo&fref=nf&__tn__=kC-R"> </a>
                            <a className="btn fa fa-youtube-play fa-lg" href="https://www.youtube.com/channel/UCMYFGprn641pCVIOtyUTgpA"> </a>
                            <a className="btn fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/tmfa-gct-16705b206/"> </a>
                            <a className="btn fa fa-twitter fa-lg" href="https://twitter.com/GctTmfa"> </a>
                        </div>
                    </div>
                </div>  
                <div className="row row-main justify-content-center">             
                    <div className="col-auto btn m-0 mt-2">
                        <a href="https://www.linkedin.com/in/jeyansaran620">{tamil ? "தொழில்நுட்ப குழு - ஜெயன்" : "TMFA Tech Team - Jeyan"}</a>
                    </div>
                </div>
            </div>
        </div>     
    );
};


export default Footer;
