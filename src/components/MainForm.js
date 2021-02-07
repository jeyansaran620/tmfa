import React from 'react';
import { hostname } from '../hostname';
import {withRouter} from 'react-router-dom';
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
            submitted: false,
            SubmitError: ''
        };
    }

    
    submitForm(e)
    {
        e.preventDefault();
        this.setState({
            submitted : true
        });
        let error = false;
        let completed = true;
        if (this.state.TeamName === '' || this.state.Theme === '' || this.state.TeamName === '')
        {
            this.setState({
                ThemeError : this.state.Theme === '' ? (this.props.tamil ? 'ஒன்றைத் தேர்ந்தெடுக்கவும்' : 'Select a Theme') : '',
                SubmitError : this.props.tamil ? 'அனைத்து குழு விவரங்களையும் நிரப்பவும்' : 'fill all the team detail',
                submitted: false
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
                    SubmitError :  this.props.tamil ? 'அனைத்து உறுப்பினர் விவரங்களையும் நிரப்பவும்' :  'fill all the member details',
                    submitted: false
                });
                completed = false;
            }
            return null;
        })
        if(error)
        {
            this.setState({
                SubmitError : this.props.tamil ? 'அனைத்து பிழைகளையும் தீர்க்கவும்' : 'resolve all the errors',
                submitted: false
            });
        }
        else if(!error && completed)
        {
            let team = {};
            team.TeamName  = this.state.TeamName;
            team.Theme  = this.state.Theme;
            team.WorkCount  = this.state.WorkCount;
            team.TeamMembers  = [];
            this.state.TeamMembers.map((mem) =>
            {
                let newMem = {};
                newMem.Name = mem.Name;
                newMem.Email = mem.Email;
                newMem.Mobile = mem.Mobile;
                newMem.Grade = mem.Grade;
                newMem.Organisation = mem.Organisation;
                newMem.Country = mem.Country;
                team.TeamMembers.push(newMem);
                return null;
            })

            const headers = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(team)
            };

            fetch( `${hostname}teams`, headers)
            .then(response => response.json())
            .then(json => 
                {
                    console.log(json);
                   this.setState({
                    SubmitError : ''
                });
                console.log("done", this.state)
                
                this.props.history.push(`/FormSuccess/${json._id}`);
                })
                .catch((err) => {
                    console.log(err)
                    this.setState({
                        SubmitError :  this.props.tamil ? 'பதிவு தவறாகிவிட்டது !!!' :'Registration Went Wrong !!!',
                        submitted: false
                    });
                })
        }
    }

    validateName(name)
    {
        if(name.trim().length < 4)
        return this.props.tamil ? 'பெயர் குறைந்தபட்சம் 4 எழுத்துக்கள் இருக்க வேண்டும்' : 'Name Should atleast have 4 characters'
        else if (name.trim().length > 20)
        return this.props.tamil ? 'பெயர் 20 எழுத்துகளுக்கு மிகாமல் இருக்க வேண்டும்' : 'Name should not exceed 20 characters'
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
                CountError : this.props.tamil ? 'அணியில் 4 உறுப்பினர்கள் வரை மட்டுமே இருக்க முடியும்' :  "Team can only have upto 4 hackers"
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
                CountError : this.props.tamil ? 'அணியில் குறைந்தபட்சம் 2 உறுப்பினர்கள் இருக்க வேண்டும்' : "Team should have atleast 2 hackers"
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
                    <div className={`${this.props.tamil ? "tamil" : ""} form-heading p-2`} >{ this.props.tamil ? "அணியின் விவரங்கள்" : "Team Details"}</div>
                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for="teamName" ><div className={`form-label ${this.props.tamil ? "tamil" : ""}`}  >{ this.props.tamil ? "அணியின் பெயர்:" : "Team Name:"}</div></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string" id="teamName" placeholder={ this.props.tamil ? "அணியின் பெயர் தருக" : "Enter Team Name"}
                            value={this.state.TeamName} onChange={(e) => this.teamNameChange(e)} />
                        <FormText className={this.props.tamil ? "tamil" : ""}>
                            {this.state.TeamNameError === '' ? null : <div className="error-msg">{this.state.TeamNameError}</div>}
                        </FormText>
                    </div>
                </FormGroup>

                <FormGroup row className="p-2">
                    <Label className="col-4 text-center"><div className={`form-label ${this.props.tamil ? "tamil" : ""}`}  >{ this.props.tamil ? "அணியின் கருப்பொருள்" : "Team Theme:"}</div></Label>
                    <div className="col-8 col-md-6">
                        <div className="row justify-content-around">
                            <div className={`col-5 p-1 theme-option text-center ${this.state.Theme === "Tamil Arts" ? "theme-option-select" : ""}`} onClick={() => this.changeTheme("Tamil Arts")}> { this.props.tamil ? "கலைகள்" : "Tamil Arts"} </div>
                            <div className={`col-5 p-1 theme-option text-center ${this.state.Theme === "Tamil Literature" ? "theme-option-select" : ""}`} onClick={() => this.changeTheme("Tamil Literature")}>{ this.props.tamil ? "இலக்கியம்" : "Tamil Literature"} </div>
                            <div className={`col-5 p-1 theme-option text-center ${this.state.Theme === "Tamil Wikipedia" ? "theme-option-select" : ""}`} onClick={() => this.changeTheme("Tamil Wikipedia")}> { this.props.tamil ? "விக்கிபீடியா" : "Tamil Wikipedia"} </div>
                        </div>
                        <FormText  className={this.props.tamil ? "tamil" : ""}>
                            {this.state.ThemeError === '' ? null : <div className="error-msg">{this.state.ThemeError}</div>}
                        </FormText>
                    </div>
                </FormGroup>

                <FormGroup row className="p-2">
                    <Label className="col-4 text-center"><div className={`form-label ${this.props.tamil ? "tamil" : ""}`}  >{ this.props.tamil ? "உறுப்பினர் எண்ணிக்கை" : "Team Count:"}</div></Label>
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
                        <FormText className={this.props.tamil ? "tamil" : ""}>
                            {this.state.CountError === '' ? null : <div className="error-msg">{this.state.CountError}</div>}
                        </FormText>
                    </div>
                </FormGroup>

                <div className={`${this.props.tamil ? "tamil" : ""} form-heading p-2`} >{ this.props.tamil ? "அணி உறுப்பினர்கள்" : "Team Members"}</div>
                {
                    this.state.TeamMembers.map((mem,i) =>
                    {
                        return(
                        <div className="p-2" key={i}>
                            <div className={`${this.props.tamil ? "tamil" : ""} form-heading p-3`}>{ this.props.tamil ? "உறுப்பினர்" : "Member"} {i+1} {i===0 ?(this.props.tamil ? " - அணியின் தலைவர்" : " - Team Lead") : null}</div> 
                            <MemberForm number = {i+1} tamil={this.props.tamil}
                                WorkCount = {this.state.WorkCount} MemberErrorChange = {this.MemberErrorChange}
                                MemberNameChange = {this.MemberNameChange}  MemberEmailChange = {this.MemberEmailChange} 
                                MemberMobileChange = {this.MemberMobileChange} MemberGradeChange = {this.MemberGradeChange} 
                                MemberOrgChange = {this.MemberOrgChange} MemberCountryChange = {this.MemberCountryChange}/>
                        </div>
                       ) 
                    })
                }
                <FormText>
                        {this.state.SubmitError === '' ? null : <div className="error-msg">{this.state.SubmitError}</div>}
                </FormText>
                <FormGroup className="row p-2">
                    <div className="col-4 m-auto">
                        <Button
                            type = "submit" className={this.props.tamil ? "tamil" : ""} onClick={(e) => this.submitForm(e)} disabled={this.state.submitted}>{this.state.submitted ? (this.props.tamil ? "பதிவேற்றப்படுகிறது" : "Loading") : (this.props.tamil ? "சமர்ப்பிக்கவும்" : "Submit")}</Button>
                    </div>
                </FormGroup>
            </Form>
        
        </div>
        )
    }
}

export default withRouter(MainForm);