import React from 'react';
import { hostname } from '../hostname';
import {  Button, Form, FormGroup, Label, Input,FormText } from 'reactstrap';
import MemberForm from './MemberForm';

class MainForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            TeamName : '',
            TeamNameError: '',
            Theme : '',
            ThemeError : '',
            WorkCount: 0,
            TeamMembers: [
                {
                    Name: '',
                    Email: '',
                    Mobile: '',
                    Grade: '',
                    Organisation: '',
                    Country: '',
                    Error: false
                },
                {
                    Name: '',
                    Email: '',
                    Mobile: '',
                    Grade: '',
                    Organisation: '',
                    Country: '',
                    Error: false
                }
            ],
            CountError: '',
            SubmitError: ''
        };
    }

    
    submitForm(e)
    {
        e.preventDefault();
        let error = false;
        let completed = true;
        if (this.state.TeamName === '' || this.state.Theme === '' || this.state.TeamName === '')
        {
            this.setState({
                ThemeError : this.state.Theme === '' ? 'Select a Theme' : '',
                SubmitError : 'fill all the team detail'
            });
            completed = false;
            return null;      
        }
        else if (this.state.TeamNameError !== '')
        {
            error = true;
        }
        this.state.TeamMembers.map((mem) => {
            if(mem.Error)
            {
                error = true;
                return null;
            } 
            else if(mem.Name === '' || mem.Email === '' || mem.Grade === '' || mem.Mobile === '' || mem.Organisation === '' || mem.Country === '')
            {
                this.setState({
                    SubmitError : 'fill all the member details'
                });
                completed = false;
            }
            return null;
        })
        if(error)
        {
            this.setState({
                SubmitError : 'resolve all the errors'
            });
        }
        else if(!error && completed)
        {
            this.setState({
                SubmitError : ''
            });
            console.log("done", this.state)
        }
    }

    validateName(name)
    {
        if (! /^[A-Za-z ]+$/.test(name))
        return 'Name should contain only alphabets'
        else if(name.trim().length < 4)
        return 'Name Should atleast have 4 characters'
        else if (name.trim().length > 12)
        return 'Name should not exceed 12 characters'
        return ''
    }

    teamNameChange(e)
    {
        this.setState({
            TeamName: e.target.value,
            TeamNameError : this.validateName(e.target.value)
        });
    }

    changeTheme(change)
    {
        this.setState({
            Theme: change,
            ThemeError : ''
        });   
    }
    
    increaseCount()
    {
        if(this.state.TeamMembers.length > 3)
        {
            this.setState({
                CountError : "Team can only have upto 4 hackers"
            });  
        }
        else
        {
            let members = this.state.TeamMembers;
            members.push({
                Name: '',
                Email: '',
                Mobile: '',
                Grade: '',
                Organisation: '',
                Country: '',
                error: false
            })
            this.setState({
                TeamMembers: members
            })
        }
    }
    decreaseCount()
    {
        if(this.state.TeamMembers.length < 3)
        {
            this.setState({
                CountError : "Team should have atleast 2 hackers"
            });  
        }
        else
        {
            let members = this.state.TeamMembers;
            members.pop()
            this.setState({
                TeamMembers: members
            })
        }
    }

    MemberNameChange = (i,name) =>
    {
        let members = this.state.TeamMembers;
        members[i-1].Name = name;
        this.setState({
            TeamMembers: members
        })
    }

    MemberEmailChange = (i,mail) =>
    {
        let members = this.state.TeamMembers;
        members[i-1].Email = mail;
        this.setState({
            TeamMembers: members
        })
    }

    MemberMobileChange = (i,mobile) =>
    {
        let members = this.state.TeamMembers;
        members[i-1].Mobile = mobile;
        this.setState({
            TeamMembers: members
        })
    }
    
    
    MemberGradeChange = (i,grade) =>
    {
        let members = this.state.TeamMembers;
        members[i-1].Grade = grade;
        let WorkCount = 0;
        members.map((mem) => 
        {
            if(mem.Grade === "Work")
            {
                WorkCount += 1;
            }
            return null;
        })
        this.setState({
            TeamMembers: members,
            WorkCount 
        })

    }
    
    MemberOrgChange = (i,org) =>
    {
        let members = this.state.TeamMembers;
        members[i-1].Organisation = org;
        this.setState({
            TeamMembers: members
        })
    }
    
    MemberCountryChange = (i,country) =>
    {
        let members = this.state.TeamMembers;
        members[i-1].Country = country;
        this.setState({
            TeamMembers: members
        })
    }
    MemberErrorChange = (i,error) =>
    {
        let members = this.state.TeamMembers;
        members[i-1].Error = error;
        this.setState({
            TeamMembers: members
        })
    }

    render()
    {
        return (
            <div className="container">
            <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                    <h4 style={{padding:"1.5rem"}}>Team Details</h4>
                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for="teamName" ><h5>Team Name:</h5></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string" style={{height:"2rem"}} id="teamName" placeholder="Give Team Name"
                            value={this.state.TeamName} onChange={(e) => this.teamNameChange(e)} />
                        <FormText>
                            {this.state.TeamNameError === '' ? null : <h6 >{this.state.TeamNameError}</h6>}
                        </FormText>
                    </div>
                </FormGroup>

                <FormGroup row className="p-2">
                    <Label className="col-4 text-center"><h5>Your Theme:</h5></Label>
                    <div className="col-8 col-md-6">
                        <div className="row justify-content-around">
                            <div className={`col-5 p-2 theme-option text-center ${this.state.Theme === "Tamil Arts" ? "theme-option-select" : ""}`} onClick={() => this.changeTheme("Tamil Arts")}> Tamil Arts </div>
                            <div className={`col-5 p-2 theme-option text-center ${this.state.Theme === "Tamil Medicine" ? "theme-option-select" : ""}`} onClick={() => this.changeTheme("Tamil Medicine")}> Tamil Medicine </div>
                        </div>
                        <FormText>
                            {this.state.ThemeError === '' ? null : <h6 >{this.state.ThemeError}</h6>}
                        </FormText>
                    </div>
                </FormGroup>

                <FormGroup row className="p-2">
                    <Label className="col-4 text-center"><h5>Team Count:</h5></Label>
                    <div className="col-8 col-md-6">
                        <div className="row justify-content-around">     
                            {
                                this.state.TeamMembers.map((mem,i) =>
                                {
                                    return  <img key={i} className="col-3 p-1" href={`#k`} src="./images/hacker.png" alt="hacker" />
                                })
                            }  
                           
                        </div>
                        <div className="row justify-content-around">
                            <button className="col-2 theme-option text-center" disabled={this.state.TeamMembers.length < 3} onClick={() => this.decreaseCount()}>-</button>
                            <button className="col-2 theme-option text-center" disabled={this.state.TeamMembers.length > 3} onClick={() => this.increaseCount()}>+</button>
                        </div>
                        <FormText>
                            {this.state.CountError === '' ? null : <h6 >{this.state.CountError}</h6>}
                        </FormText>
                    </div>
                </FormGroup>

                <h4 className="p-2" style={{padding:"1.5rem"}}>Team Members</h4>
                {
                    this.state.TeamMembers.map((mem,i) =>
                    {
                        return(
                        <div className="p-2" key={i}>
                            <h4 style={{padding:"1.5rem"}}>Member {i+1} {i===0 ? " - Team Lead" : null}</h4> 
                            <MemberForm number = {i+1} WorkCount = {this.state.WorkCount} MemberErrorChange = {this.MemberErrorChange}
                                MemberNameChange = {this.MemberNameChange}  MemberEmailChange = {this.MemberEmailChange} 
                                MemberMobileChange = {this.MemberMobileChange} MemberGradeChange = {this.MemberGradeChange} 
                                MemberOrgChange = {this.MemberOrgChange} MemberCountryChange = {this.MemberCountryChange}/>
                        </div>
                       ) 
                    })
                }
                <FormText>
                        {this.state.SubmitError === '' ? null : <h6 >{this.state.SubmitError}</h6>}
                </FormText>
                <FormGroup className="row p-2">
                    <div className="col-4 offset-7">
                        <Button
                            type = "submit" onClick={(e) => this.submitForm(e)}>Register</Button>
                    </div>
                </FormGroup>
            </Form>
        
        </div>
        )
    }
}

export default MainForm;