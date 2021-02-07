import React from 'react';
import {Navbar, Nav, NavbarToggler, Collapse, NavItem,} from 'reactstrap';
import { withRouter } from "react-router-dom";
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component{
  
    constructor(props) {
        super(props);
    
        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
   
        this.Items = [ 
            {
                content:"NiralKalam",
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
    }
   
 
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    RenderList()
    {
        return (  
                <> 
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar className="ml-auto">
                {
                    this.Items.map((item, i) => {
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
                        <div className="mr-auto nav-brand linker" onClick={() =>  this.props.history.push("/Home")} >TMFA - GCT</div>
                       
                            {this.RenderList()}
                      
                    </div>
                </Navbar>
            </>
        );
    }
}

export default withRouter(NavBar);
