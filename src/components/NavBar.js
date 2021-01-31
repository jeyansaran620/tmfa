import React from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,} from 'reactstrap';
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
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto linker navbarbrand" onClick={() =>  this.props.history.push("/Home")} >TMFA - GCT</NavbarBrand>
                       
                            {this.RenderList()}
                      
                    </div>
                </Navbar>
            </>
        );
    }
}

export default withRouter(NavBar);
