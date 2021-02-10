import React from 'react';
import { Card, CardTitle } from 'reactstrap';
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
       const ArtsTeams = teams.filter((team) => team.Theme === "Tamil Arts");
       const LitTeams = teams.filter((team) => team.Theme === "Tamil Literature");
       const WikiTeams = teams.filter((team) => team.Theme === "Tamil Wikipedia");
        return(
            <div className="container text-center" >
                <div>
                  <h4 className="col-10 m-3" >Total Teams: {teams.length}</h4>
                </div>
                <div>
                  <h4 className="col-10 m-3" >Teams in Arts: {ArtsTeams.length}</h4>
                </div>
                {
                    ArtsTeams.map((team,i) => {
                        return(
                        <div key = {i}>
                             <div className="row p-2">
                <h4 className="col-5 m-1" >Team {` ${i+1} `} Details</h4>
                </div>
                <Card body outline color="secondary" className="col-10 m-1">
        
                <div className="row p-2 m-1">Team Name: {team.TeamName}</div>

                <div className="row p-2 m-1">Team Theme: {team.Theme}</div>

                <div className="row p-2 m-1">Having Mentor: {(team.WorkCount > 0).toString()}</div>
             
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
                        </div>)
                    })
                }
                 <div>
                  <h4 className="col-10 m-3" >Teams in Literature: {LitTeams.length}</h4>
                </div>
                {
                    LitTeams.map((team,i) => {
                        return(
                        <div key = {i}>
                             <div className="row p-2">
                <h4 className="col-5 m-1" >Team {` ${i+1} `} Details</h4>
                </div>
                <Card body outline color="secondary" className="col-10 m-1">
        
                <div className="row p-2 m-1">Team Name: {team.TeamName}</div>

                <div className="row p-2 m-1">Team Theme: {team.Theme}</div>

                <div className="row p-2 m-1">Having Mentor: {(team.WorkCount > 0).toString()}</div>
             
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
                        </div>)
                    })
                }

<div>
                  <h4 className="col-10 m-3" >Teams in Wikipedia: {WikiTeams.length}</h4>
                </div>
                {
                    WikiTeams.map((team,i) => {
                        return(
                        <div key = {i}>
                             <div className="row p-2">
                <h4 className="col-5 m-1" >Team {` ${i+1} `} Details</h4>
                </div>
                <Card body outline color="secondary" className="col-10 m-1">
        
                <div className="row p-2 m-1">Team Name: {team.TeamName}</div>

                <div className="row p-2 m-1">Team Theme: {team.Theme}</div>

                <div className="row p-2 m-1">Having Mentor: {(team.WorkCount > 0).toString()}</div>
             
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
                        </div>)
                    })
                }
            </div>
        )
    }
}
}


  
export default withRouter(RegisteredTeams);