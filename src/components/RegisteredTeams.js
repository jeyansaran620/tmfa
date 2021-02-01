import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { hostname } from '../hostname';
import { withRouter } from 'react-router-dom';

class RegisteredTeams extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            teams: null,
            fetchError : ''
        };
    }
    
    componentDidMount()
    {
        const headers = {
            method: 'GET'
        };

        fetch( `${hostname}teams/list`, headers)
        .then(response => response.json())
        .then(json => 
            {
               this.setState({
                    teams : json
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    fetchError : 'teams fetch Went Wrong !!!'
                });
            })
        }

render()
{
    const {fetchError, teams } = this.state;

    if (fetchError !== '')
     {
         return (
            <h3 style={{color:"#DE9E48",textAlign:"center"}}>{fetchError}</h3>
    )}
    else if(teams === null)
    {
        return (
             <h3 style={{color:"#DE9E48",textAlign:"center"}}>Loading</h3>
        )
    }
    else
    {
        return(
            <div className="container" >
                {
                    teams.map((team,i) => {
                        return(
                        <div key = {i}>
                             <div className="row p-2">
                <h4 className="col-5 m-1" >Team {` ${i+1} `} Details</h4>
                </div>
                <Card body outline color="secondary" className="col-10 m-1">
        
                <div className="row p-2 m-1">Team Name: {team.TeamName}</div>

                <div className="row p-2 m-1">Team Theme: {team.Theme}</div>

                <div className="row p-2 m-1">Professionals Count: {team.WorkCount}</div>
             
                <div className="row p-2">
                    <div className="container">
                    <div className="row m-1">Team Members:</div>
                    <div className="row">
                    {
                    team.TeamMembers.length === 0 ? <h5>No Members by now</h5>
                    :
                     team.TeamMembers.reverse().map((mem,i) =>{
                         return(
                              <Card body outline color="secondary" key ={i} className="col-11 col-sm-5 m-2">
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
                        </div>)
                    })
                }
    
            </div>
        )
    }
}
}


  
export default withRouter(RegisteredTeams);