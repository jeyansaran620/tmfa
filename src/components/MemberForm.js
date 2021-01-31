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
    }

    changeGrade(change)
    {
        this.props.MemberGradeChange(this.props.number,change)
        this.setState({
            Grade: change,
            GradeError : ''
        });   
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
            OrgError : err
        });
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
            CountryError : err
        });
    }

    render()
    {
        return(
            <div className="container">
                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for={`Member${this.props.number}Name`} ><h5>Member Name:</h5></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string" style={{height:"2rem"}} id={`Member${this.props.number}Name`} placeholder="Give Member Name"
                            value={this.state.Name} onChange={(e) => this.memberNameChange(e)} />
                        <FormText>
                            {this.state.NameError === '' ? null : <h6 >{this.state.NameError}</h6>}
                        </FormText>
                    </div>
                </FormGroup>
                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for={`Member${this.props.number}Mail`} ><h5>Member Email:</h5></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string" style={{height:"2rem"}} id={`Member${this.props.number}Mail`} placeholder="Give Member Email"
                            value={this.state.Email} onChange={(e) => this.memberEmailChange(e)} />
                        <FormText>
                            {this.state.EmailError === '' ? null : <h6 >{this.state.EmailError}</h6>}
                        </FormText>
                    </div>
                </FormGroup> 

                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for={`Member${this.props.number}Mobile`} ><h5>Member Mobile:</h5></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string" style={{height:"2rem"}} id={`Member${this.props.number}Mobile`} placeholder="Give Member Mobile"
                            value={this.state.Mobile} onChange={(e) => this.memberMobileChange(e)} />
                        <FormText>
                            {this.state.MobileError === '' ? null : <h6 >{this.state.MobileError}</h6>}
                        </FormText>
                    </div>
                </FormGroup> 

                <FormGroup row className="p-2">
                    <Label className="col-4 text-center"><h5>Member Grade:</h5></Label>
                    <div className="col-8 col-md-6">
                        <div className="row justify-content-around">
                            <div className={`col-4 p-2 m-0 theme-option text-center ${this.state.Grade === "School" ? "theme-option-select" : ""}`} onClick={() => this.changeGrade("School")}> School </div>
                            <div className={`col-4 p-2 m-0 theme-option text-center ${this.state.Grade === "Degree" ? "theme-option-select" : ""}`} onClick={() => this.changeGrade("Degree")}> Degree </div>
                            <div className={`col-4 p-2 m-0 theme-option text-center ${this.state.Grade === "Work" ? "theme-option-select" : ""}`} onClick={() => this.changeGrade("Work")}> Work </div>
                     </div>
                        <FormText>
                            {this.state.GradeError === '' ? null : <h6 >{this.state.GradeError}</h6>}
                        </FormText>
                    </div>
                </FormGroup>

                <FormGroup row className="p-2">
                    <Label className="col-5 col-md-4 text-center" for={`Member${this.props.number}Org`} ><h5>Organisation:</h5></Label>
                    <div className="col-7 col-md-6 justify-content-center">
                        <Input type="string" style={{height:"2rem"}} id={`Member${this.props.number}Org`} placeholder="Give Organisation"
                            value={this.state.Organisation} onChange={(e) => this.memberOrgChange(e)} />
                        <FormText>
                            {this.state.OrgError === '' ? null : <h6 >{this.state.OrgError}</h6>}
                        </FormText>
                    </div>
                </FormGroup>

                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for={`Member${this.props.number}Country`} ><h5>Country:</h5></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string" style={{height:"2rem"}} id={`Member${this.props.number}Country`} placeholder="Give Country"
                            value={this.state.Country} onChange={(e) => this.memberCountryChange(e)} />
                        <FormText>
                            {this.state.CountryError === '' ? null : <h6 >{this.state.CountryError}</h6>}
                        </FormText>
                    </div>
                </FormGroup>

            </div>
        )
    }
}
    

export default MemberForm;