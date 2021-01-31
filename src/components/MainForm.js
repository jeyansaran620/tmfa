import React from 'react';
import { hostname } from '../hostname';
import {  Button, Form, FormGroup, Label, Input,FormText } from 'reactstrap';

class MainForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            TeamName : '',
            TeamNameError: '',
            Theme : '',
            ThemeError : '',
            ProfCount: 0,
            TeamMembers: [
                {
                    Name: '',
                    Email: '',
                    Mobile: '',
                    Grade: {}
                },
                {
                    Name: '',
                    Email: '',
                    Mobile: '',
                    Grade: {}
                }
            ],
            CountError: ''
        };
    }

    
    submitForm(e)
    {
        e.preventDefault();
    }

    teamNameChange(e)
    {
        this.setState({
            TeamName: e.target.value,
            TeamNameError : ''
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
                Grade: {}
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
    render()
    {
        console.log(this.state.TeamMembers)
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
                                }
                                 )
                            }  
                           
                        </div>
                        <div className="row justify-content-around">
                            <button className="col-2 theme-option text-center" onClick={() => this.decreaseCount()}>-</button>
                            <button className="col-2 theme-option text-center" onClick={() => this.increaseCount()}>+</button>
                        </div>
                        <FormText>
                            {this.state.CountError === '' ? null : <h6 >{this.state.CountError}</h6>}
                        </FormText>
                    </div>
                </FormGroup>

                <FormGroup className="row p-2">
                    <div className="col-4 offset-7">
                        <Button
                            type = "submit" onClick={(e) => this.submitForm(e)}>Add Team</Button>
                    </div>
                </FormGroup>
            </Form>
        
        </div>
        )
    }
}

export default MainForm;