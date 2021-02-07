import React from 'react';
import {Navbar, Nav, NavbarToggler, Collapse, NavItem,} from 'reactstrap';
import { withRouter } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Switch from "react-switch";

class NavBar extends React.Component{
  
    constructor(props) {
        super(props);
    
        this.state = {
            isNavOpen: false
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
                                <NavLink className="nav-link linker" to={`/${item.link}`}><span className={`fa fa-${item.icon} fa-md`}></span>  {item.content}</NavLink>
                            </NavItem>  
                        );
                    })
                }
                 </Nav>
                 </Collapse>
                 </>
                 
        ); 
    }

    render(){
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
            </>
        );
    }
}

export default withRouter(NavBar);
