import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import { hostname } from '../hostname';
import { withRouter } from 'react-router-dom';

class FormSuccess extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            team: null,
            fetchError : ''
        };
    }
    
    componentDidMount()
    {
        const headers = {
            method: 'GET'
        };

        fetch( `${hostname}teams/${this.props.match.params.id}`, headers)
        .then(response => response.json())
        .then(json => 
            {
               this.setState({
                    team : json
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    fetchError : 'team fetch Went Wrong !!!'
                });
            })
        }

render()
{
    const {fetchError, team } = this.state;

    if (fetchError !== '')
     {
         return (
            <h3 style={{color:"#DE9E48",textAlign:"center"}}>{fetchError}</h3>
    )}
    else if(team === null)
    {
        return (
             <h3 style={{color:"#DE9E48",textAlign:"center"}}>Loading</h3>
        )
    }
    else
    {
        return(
            <div className="container" >
                
                <div className="row p-2 justify-content-around">
                <h4 className="col-5 m-1" >Registration Success</h4>
                </div>
                <Card body outline color="secondary" className="col-10 m-1">
        
                <div className="row p-2 m-1">Team Name: {team.TeamName}</div>

                <div className="row p-2 m-1">Team Theme: {team.Theme}</div>
             
                <div className="row p-2">
                    <div className="container">
                    <div className="row m-1">Team Members:</div>
                    <div className="row">
                    {
                    team.TeamMembers.length === 0 ? <h5>No Members by now</h5>
                    :
                     team.TeamMembers.map((mem,i) =>{
                         return(
                              <Card body outline color="secondary" key ={i} className="col-11 card-sec col-sm-5 m-2">
                                    <CardTitle tag="h5">{mem.Name}</CardTitle>
                                    <> 
                                        <h6>{mem.Email}</h6>
                                        <h6>{mem.Mobile}</h6>
                                        <h6>{mem.Grade}</h6>
                                        <h6>{mem.Organisation}</h6>
                                        <h6>{mem.Country}</h6>
                                    </>
                                </Card>
                        )})
                    }
                    </div>
                    </div>    

                </div>
                </Card>
            </div>
        )
    }
}
}


  
export default withRouter(FormSuccess);