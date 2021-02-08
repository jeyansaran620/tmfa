import React from 'react';

import {  Card, CardImg, CardBody, CardTitle,CardText, CardSubtitle} from 'reactstrap';

const AboutUS = ({tamil}) =>
{
    return(
        <div className="container">
            <div className="row row-main">

            <div className="col-12 about-box">
                <div className="about-heading">
                       {tamil ? "எங்கள் தலைமை" : "Our Faculties"}
                </div>
                <div className="row justify-content-around">
                <Card className="col-12 col-lg-5 staff-intro">
                    <CardImg className="staff-photo" top width="100%" src="./images/gct_principal.jpg" alt="Card image cap" />
                    <CardBody> 
                       
                        <CardTitle tag="h5">{tamil ? "டாக்டர் பி.தமரை, பி.எச்.டி." : "Dr.P.Thamarai,Ph.D."}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{tamil ? "கல்லூரி முதல்வர்" : "Principal"}</CardSubtitle>
                        <CardText>{tamil ? "அரசு தொழில்நுட்பக் கல்லூரி" : "Government College of Technology"}</CardText>
                    </CardBody>
                </Card>
                <Card className="col-12 col-lg-5 staff-intro">
                    <CardImg className="staff-photo" top width="100%" src="./images/tmfa_advisor.jpg" alt="Card image cap" />
                    <CardBody> 
                        <CardTitle tag="h5">{tamil ? "டாக்டர் ஜே.அன்பழகன் விஜய்" : "Dr.J.Anbazhagan Vijay"}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{tamil ? "டி.எம்.எஃப்.ஏ- ஆலோசகர்" : "TMFA- Advisor"}</CardSubtitle>
                    </CardBody>
                </Card>
                </div>
            </div>

                <div className="col-12 about-box">
                    <div className="about-heading">
                    { tamil ? "தமிழ் மற்றும் நுண்கலை மன்றம்" :
                        "Tamil Mandram and Fine Arts club of GCT - TMFA"}
                    </div>
                    <img className="about-photo" href={`#k`} src="./images/gct.jpg" alt="hacker" />
                    <div className="about-details">
                    { tamil ? "கோவை அரசினர் தொழில்நுட்பக் கல்லூரியின் தமிழ் மற்றும் நுண்கலை மன்றம் தமிழ் மற்றும் நுண்கலை சார்ந்த பல்வேறு பணிகளை கடந்த 50 வருடங்களுக்கும் மேலாக செய்து வருகிறது. 1975ம் ஆண்டு அக்டோபர் 1ம் நாள் தமிழ் மற்றும் நுண்கலை மன்றம் தோற்றுவிக்கப்பட்டது. தோன்றிய காலம் முதலே இலக்கியம், கலைகள், தமிழ் ஆராய்ச்சி மற்றும் சமூகப் பணிகளை மேற்கொண்டு வருகிறது. வில்லுப்பாட்டு, தெருக்கூத்து, நாடகம், பொம்மலாட்டம், ஒளிநாடகம், மௌனநாடகம், சிலம்பம், பறை, கிராமிய நடனம், பரதம் மற்றும் நவீன நாடகம் போன்ற 10க்கும் மேற்பட்ட கலை நிகழ்வுகள் நிகழ்த்தியும், தமிழ் இலக்கியம் மற்றும் கலைகள் குறித்த விழிப்புணர்வையும் மாணவர்களிடையே உருவாக்கி வருகிறது. எம் மன்ற மாணவர்கள் இதுவரை 23 புத்தகங்களை எழுதி வெளியிட்டுள்ளனர். தற்போது இயல், இசை மற்றும் நாடகத்தமிழோடு நுட்பத்தமிழை இணைக்கும் நோக்கத்தோடு நிரல்களம்'21 என்ற தொழில்நுட்ப நிகழ்வை நடத்துகிறது." :
                    "Tamil Mandram and Fine Arts club of Government College of Technology actively involve in many activities to develop and create awareness about tamil arts and literature among students. In 1975 october 1, Tamil Mandram and Fine Arts club was started. Since then it has done many activities such as cultural fests, research activities, and social activities. There are more than 10 group events under Tamil Arts viz Villupattu, Streetplay, Mime, Drama, Puppet show, Modern drama, Silambattam, Paraiattam, Folk dance and lights show We have been learning and also participating in many college events. 23 books were published by our club students. Now in this lockdown we have initiated this hackathon to create awareness among students about the importance of tamil computation and  technology in language."}
                    </div>
                </div>
                <div className="col-12 about-box">
                    <div className="about-heading">
                    { tamil ? "உத்தமம் - உலகத் தமிழ் தகவல் தொழில்நுட்ப மன்றம்" :
                        "International Forum for Information Technology in Tamil - INFITT"}
                    </div>
                    <div className="about-details">
                    { tamil ? "தமிழ்த் தகவல் தொழில்நுட்பம் தொடர்பான விடயங்களை ஆயும், நியமங்களை பரிந்துரைக்கும் ஒரு தொண்டூழியர் அமைப்பு ஆகும். இவ்வமைப்பு அரசாங்கங்கள், அனைத்துலக அமைப்புகள், மற்றும் பலநூறு தன்னாவலர்களை கொண்டிருக்கின்றது. இவ்வமைப்பு உத்யோகபூர்வமாக யூலை 24, 2000 அன்று ஆரம்பிக்கப்பட்டது.தமிழ் கம்யூட்டிங் மற்றும் தொழில்நுட்பம் மூலம் தமிழை மேம்படுத்தும் செயல்களில் ஈடுபட்டு வருகிறது." :
                        "The International Forum for Information Technology in Tamil (INFITT, read In-Fit; Tamil: உலகத் தமிழ் தகவல் தொழில்நுட்ப மன்றம் (உத்தமம்)) is a non-profit, non-governmental nodal organization for collaboration among professionals, enthusiasts, government entities, and other international organizations working in the development and standardization of information technology for Tamil language. It has active liaison and collaboration with government entities in India, Sri Lanka, Singapore, Malaysia and industry bodies like Unicode Consortium."}
                     </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUS;