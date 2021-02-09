import React from 'react';
import {Navbar, Nav, NavbarToggler, Collapse, Button, NavItem, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { withRouter } from "react-router-dom";
import Switch from "react-switch";
import {EnglishRules, TamilRules} from './Content';
class NavBar extends React.Component{
  
    constructor(props) {
        super(props);
    
        this.state = {
            isNavOpen: false,
            isModOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
   
        this.EnglishItems = [ 
            {
                content:"NiralKalam'21",
                link:"NiralKalam",
                icon:"fort-awesome"
            },
            {
                content:"Register",
                link:"Register",
                icon:"ticket"
            },
            {
                content:"About us",
                link:"AboutUs",
                icon:"info-circle"
            }
        ];

        this.TamilItems = [ 
            {
                content:"நிரல்களம்'21",
                link:"NiralKalam",
                icon:"fort-awesome"
            },
            {
                content:"பதிவு செய்ய",
                link:"Register",
                icon:"ticket"
            },
            {
                content:"எங்களை பற்றி",
                link:"AboutUs",
                icon:"info-circle"
            }
        ];
        
    }
    
   
 
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal = () => {
        this.setState({
            isModOpen: !this.state.isModOpen
        });
    }

    RenderList()
    {
        const Items = this.props.tamil ? this.TamilItems : this.EnglishItems;
        return (  
                <> 
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar className="ml-auto">
                {
                    Items.map((item, i) => {
                        return(
                            <NavItem key={i} className="m-1">
                                <div className="nav-link" onClick={() => { if(this.state.isNavOpen) this.toggleNav(); this.props.history.push(`/${item.link}`); } } ><span className={`fa fa-${item.icon} fa-md`}></span>  {item.content}</div>
                            </NavItem>  
                        );
                    })
                }
                <NavItem className="m-1">
                                <div onClick={() => { if(this.state.isNavOpen) this.toggleNav(); this.toggleModal(); }} className="nav-link linker" ><span className={`fa fa-angle-double-right fa-md`}></span>{this.props.tamil ? " விதிமுறைகள்" : " Rules"}
                                </div>
                </NavItem>  
                 </Nav>
                 </Collapse>
                 </>
                 
        ); 
    }

    render(){

        const Rules = this.props.tamil ? TamilRules : EnglishRules;

        return (
            <>
                <Navbar dark expand="md" sticky="top"  >
                    <div className="container">
                        <div className="nav-brand" onClick={() =>  this.props.history.push("/Home")} >TMFA - GCT</div>
                        <div className="d-none d-lg-block space"></div> 
                        <Switch onChange={() =>this.props.switchChange()} handleDiameter={22}
                        width={80} height={30} onColor={'#1e1e1e'} offColor={'#3b3b3b'}
                        uncheckedIcon={" Tamil "} checkedIcon={" English "}
                        checked={this.props.tamil} borderRadius={10} />

                            {this.RenderList()}
                      
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModOpen} toggle={() => this.toggleModal()} className="modal-design">
                    <ModalHeader toggle={() => this.toggleModal()}>{this.props.tamil ? "விதிமுறைகள்" : "Rules & Regulations"} </ModalHeader>
                    <ModalBody>
                    {
                           Rules.map((points,i) =>
                            {
                                return(
                                     <div key={i} className={this.props.tamil ? "rules-point tamil ":" rules-point"}>
                                         {`${i+1}) `} {points.point}
                                     </div>
                                    );
                            })
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button className={this.props.tamil ? "modal-button tamil ":"modal-button"} onClick={() => {this.toggleModal(); this.props.history.push(`/Register`); } }> {this.props.tamil ? "பதிவு செய்ய" : "Register"}</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default withRouter(NavBar);
