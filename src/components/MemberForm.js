import React from 'react';

import {FormGroup, Label, Input,FormText } from 'reactstrap';

class MemberForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            NameError: '',
            Email: '',
            EmailError: '',
            Mobile: '',
            MobileError: '',
            Grade: '',
            GradeError: '',
            Organisation: '',
            OrgError: '',
            Country: '',
            CountryError: ''
        };
    }

    validateMember(state,name)
    {
        if(!state)
        {
            this.props.MemberErrorChange(this.props.number,true)
        }
        else if( this.state.NameError !== '' && name !== "Name")
        {
            this.props.MemberErrorChange(this.props.number,true)
        }
        else if ( this.state.EmailError !== '' && name !== "Email")
        {
            this.props.MemberErrorChange(this.props.number,true)
        }
        else if (this.state.MobileError !== '' && name !== "Mobile")
        {
            this.props.MemberErrorChange(this.props.number,true)
        }
        else if (this.state.OrgError !== '' && name !== "Org")
        {
            this.props.MemberErrorChange(this.props.number,true)
        }
        else if( this.state.CountryError !== '' && name !== "Coun")
        {
            this.props.MemberErrorChange(this.props.number,true)
        }
        else
        {
            this.props.MemberErrorChange(this.props.number,false)
        }
    }

    validateName(name)
    {
        if (! /^[A-Za-z ]+$/.test(name))
        return 'Name should contain only alphabets'
        else if(name.trim().length < 4)
        return 'Name Should atleast have 4 characters'
        else if (name.trim().length > 18)
        return 'Name should not exceed 18 characters'
        return ''
    }

    validateEmail(mail)
    {
        if (! /\S+@\S+\.\S+/.test(mail))
        return 'Provide a valid Email'
        return ''
    }

    validateMobile(number)
    {
        if (! /^(1\s|1|)?((\(\d{3}\))|\d{3})(\\-|\s)?(\d{3})(\\-|\s)?(\d{4})$/.test(number))
        return 'Provide a valid Mobile number'
        return ''
    }

    validateOrg(org)
    {
        if (! /^[A-Za-z ]+$/.test(org))
        return 'should contain only alphabets'
        else if(org.trim().length < 3)
        return 'Should atleast have 3 characters'
        else if (org.trim().length > 20)
        return 'should not exceed 20 characters'
        return ''
    }

    memberNameChange(e)
    {
        let err = this.validateName(e.target.value)
        if (err === '')
        {
            this.props.MemberNameChange(this.props.number,e.target.value)
        }
        this.setState({
            Name: e.target.value,
            NameError : err
        });
        this.validateMember(err === '',"Name");
    }
    memberEmailChange(e)
    {
        let err = this.validateEmail(e.target.value)
        if (err === '')
        {
            this.props.MemberEmailChange(this.props.number,e.target.value)
        }
        this.setState({
            Email: e.target.value,
            EmailError : err
        });
        
        this.validateMember(err === '',"Email");
    }

    memberMobileChange(e)
    {
        let err = this.validateMobile(e.target.value)
        if (err === '')
        {
            this.props.MemberMobileChange(this.props.number,e.target.value)
        }
        this.setState({
            Mobile: e.target.value,
            MobileError : err
        });
        
        this.validateMember(err === '',"Mobile");
    }

    changeGrade(change)
    {
        if(change === this.state.Grade)
        {
            return null;
        }
        if(change === "Work" && this.props.WorkCount > 0)
        {
            this.setState({
                GradeError : 'A team Can\'t have more than 1 working Mentor'
            });   
        }
        else
        {
            this.props.MemberGradeChange(this.props.number,change)
            this.setState({
                Grade: change,
                GradeError : ''
            });
        }
    }

    memberOrgChange(e)
    {
        let err = this.validateOrg(e.target.value)
        if (err === '')
        {
            this.props.MemberOrgChange(this.props.number,e.target.value)
        }
        this.setState({
            Organisation: e.target.value,
            GradeError: this.state.Grade === '' ? 'Select a Grade' : '',
            OrgError : err
        });
        
        this.validateMember(err === '',"Org");
    }

    
    memberCountryChange(e)
    {
        let err = this.validateOrg(e.target.value)
        if (err === '')
        {
            this.props.MemberCountryChange(this.props.number,e.target.value)
        }
        this.setState({
            Country: e.target.value,
            GradeError: this.state.Grade === '' ? 'Select a Grade' : '',
            CountryError : err
        });
        
        this.validateMember(err === '',"Country");
    }


    render()
    {
        return(
            <div className="container">
                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for={`Member${this.props.number}Name`} ><div className="form-label" >Name:</div></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string"  id={`Member${this.props.number}Name`} placeholder="Give Name"
                            value={this.state.Name} onChange={(e) => this.memberNameChange(e)} />
                        <FormText>
                            {this.state.NameError === '' ? null : <div className="error-msg">{this.state.NameError}</div>}
                        </FormText>
                    </div>
                </FormGroup>
                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for={`Member${this.props.number}Mail`} ><div className="form-label" >Email:</div></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string"  id={`Member${this.props.number}Mail`} placeholder="Give Email"
                            value={this.state.Email} onChange={(e) => this.memberEmailChange(e)} />
                        <FormText>
                            {this.state.EmailError === '' ? null : <div className="error-msg">{this.state.EmailError}</div>}
                        </FormText>
                    </div>
                </FormGroup> 

                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for={`Member${this.props.number}Mobile`} ><div className="form-label" >Mobile:</div></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string"  id={`Member${this.props.number}Mobile`} placeholder="Give Mobile"
                            value={this.state.Mobile} onChange={(e) => this.memberMobileChange(e)} />
                        <FormText>
                            {this.state.MobileError === '' ? null : <div className="error-msg">{this.state.MobileError}</div>}
                        </FormText>
                    </div>
                </FormGroup> 

                <FormGroup row className="p-2">
                    <Label className="col-4 text-center"><div className="form-label" >Grade:</div></Label>
                    <div className="col-8 col-md-6">
                        <div className="row justify-content-around">
                            <div className={`col-3 m-0 theme-option text-center ${this.state.Grade === "School" ? "theme-option-select" : ""}`} onClick={() => this.changeGrade("School")}> School </div>
                            <div className={`col-3 m-0 theme-option text-center ${this.state.Grade === "Degree" ? "theme-option-select" : ""}`} onClick={() => this.changeGrade("Degree")}> Degree </div>
                            <div className={`col-3 m-0 theme-option text-center ${this.state.Grade === "Work" ? "theme-option-select" : ""}`} onClick={() => this.changeGrade("Work")}> Work </div>
                     </div>
                        <FormText>
                            {this.state.GradeError === '' ? null : <div className="error-msg">{this.state.GradeError}</div>}
                        </FormText>
                    </div>
                </FormGroup>

                <FormGroup row className="p-2">
                    <Label className="col-5 col-md-4 text-center" for={`Member${this.props.number}Org`} ><div className="form-label" >Organisation:</div></Label>
                    <div className="col-7 col-md-6 justify-content-center">
                        <Input type="string"  id={`Member${this.props.number}Org`} placeholder="Give Organisation"
                            value={this.state.Organisation} onChange={(e) => this.memberOrgChange(e)} />
                        <FormText>
                            {this.state.OrgError === '' ? null : <div className="error-msg">{this.state.OrgError}</div>}
                        </FormText>
                    </div>
                </FormGroup>

                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for={`Member${this.props.number}Country`} ><div className="form-label" >Country:</div></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string"  id={`Member${this.props.number}Country`} placeholder="Give Country"
                            value={this.state.Country} onChange={(e) => this.memberCountryChange(e)} />
                        <FormText>
                            {this.state.CountryError === '' ? null : <div className="error-msg">{this.state.CountryError}</div>}
                        </FormText>
                    </div>
                </FormGroup>

            </div>
        )
    }
}
    

export default MemberForm;