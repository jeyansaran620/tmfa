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
        if(name.trim().length < 4)
        return this.props.tamil ? 'பெயர் குறைந்தபட்சம் 4 எழுத்துக்கள் இருக்க வேண்டும்' : 'Name Should atleast have 4 characters'
        else if (name.trim().length > 20)
        return this.props.tamil ? 'பெயர் 20 எழுத்துகளுக்கு மிகாமல் இருக்க வேண்டும்' : 'Name should not exceed 20 characters'
        return ''
    }

    validateEmail(mail)
    {
        if (! /\S+@\S+\.\S+/.test(mail))
        return this.props.tamil ? 'சரியான மின்னஞ்சலை வழங்கவும்' :  'Provide a valid E-mail'
        return ''
    }

    validateMobile(number)
    {
        if (! /^(1\s|1|)?((\(\d{3}\))|\d{3})(\\-|\s)?(\d{3})(\\-|\s)?(\d{4})$/.test(number))
        return this.props.tamil ? 'சரியான தொலைபேசி எண்ணை வழங்கவும்' :  'Provide a valid Mobile number'
        return ''
    }

    validateOrg(org)
    {
        if(org.trim().length < 3)
        return this.props.tamil ? 'குறைந்தபட்சம் 3 எழுத்துக்கள் இருக்க வேண்டும்' : 'Should atleast have 3 characters'
        else if (org.trim().length > 20)
        return this.props.tamil ? '20 எழுத்துகளுக்கு மிகாமல் இருக்க வேண்டும்' : 'should not exceed 20 characters'
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
                GradeError : this.props.tamil ? 'ஒரு குழுவில் ஒன்றுக்கும் மேற்பட்ட வழிகாட்டிகளைக் இருக்க முடியாது' : 'A team Can\'t have more than 1 working Mentor'
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
            GradeError: this.state.Grade === '' ? ( this.props.tamil ? 'ஒரு தரத்தைத் தேர்ந்தெடுக்கவும்' : 'Select a Grade') : '',
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
            GradeError: this.state.Grade === '' ? ( this.props.tamil ? 'ஒரு தரத்தைத் தேர்ந்தெடுக்கவும்' : 'Select a Grade') : '',
            CountryError : err
        });
        
        this.validateMember(err === '',"Country");
    }


    render()
    {
        return(
            <div className="container">
                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for={`Member${this.props.number}Name`} ><div className={`form-label ${this.props.tamil ? "tamil" : ""}`} >{ this.props.tamil ? "பெயர்:" : "Name:"}</div></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string"  id={`Member${this.props.number}Name`} placeholder={ this.props.tamil ? "பெயர்த் தருக" : "Enter Name"}
                            value={this.state.Name} onChange={(e) => this.memberNameChange(e)} />
                        <FormText  className={this.props.tamil ? "tamil" : ""}>
                            {this.state.NameError === '' ? null : <div className="error-msg">{this.state.NameError}</div>}
                        </FormText>
                    </div>
                </FormGroup>
                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for={`Member${this.props.number}Mail`} ><div className={`form-label ${this.props.tamil ? "tamil" : ""}`} >{ this.props.tamil ? "மின்னஞ்சல்:" : "Email:"}</div></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string"  id={`Member${this.props.number}Mail`} placeholder={ this.props.tamil ? "மின்னஞ்சலைத் தருக" : "Enter Email"}
                            value={this.state.Email} onChange={(e) => this.memberEmailChange(e)} />
                        <FormText  className={this.props.tamil ? "tamil" : ""}>
                            {this.state.EmailError === '' ? null : <div className="error-msg">{this.state.EmailError}</div>}
                        </FormText>
                    </div>
                </FormGroup> 

                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for={`Member${this.props.number}Mobile`} ><div className={`form-label ${this.props.tamil ? "tamil" : ""}`} >{ this.props.tamil ? "தொலைபேசி எண்:" : "Mobile:"}</div></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string"  id={`Member${this.props.number}Mobile`} placeholder={ this.props.tamil ? "தொலைபேசி எண்ணைத் தருக" : "Enter Mobile no."}
                            value={this.state.Mobile} onChange={(e) => this.memberMobileChange(e)} />
                        <FormText  className={this.props.tamil ? "tamil" : ""}>
                            {this.state.MobileError === '' ? null : <div className="error-msg">{this.state.MobileError}</div>}
                        </FormText>
                    </div>
                </FormGroup> 

                <FormGroup row className="p-2">
                    <Label className="col-4 text-center"><div className={`form-label ${this.props.tamil ? "tamil" : ""}`} >{ this.props.tamil ? "தகுதி:" : "Grade:"}</div></Label>
                    <div className="col-8 col-md-6">
                        <div className="row justify-content-around">
                            <div className={`col-5 theme-option text-center ${this.state.Grade === "School" ? "theme-option-select" : ""}`} onClick={() => this.changeGrade("School")}>{ this.props.tamil ? "பள்ளி படிப்பு" : "School"} </div>
                            <div className={`col-5 theme-option text-center ${this.state.Grade === "Degree" ? "theme-option-select" : ""}`} onClick={() => this.changeGrade("Degree")}> { this.props.tamil ? "பட்ட படிப்பு" : "Degree"} </div>
                            <div className={`col-5 theme-option text-center ${this.state.Grade === "Work" ? "theme-option-select" : ""}`} onClick={() => this.changeGrade("Work")}>  { this.props.tamil ? "பணி" : "Working"} </div>
                     </div>
                        <FormText  className={this.props.tamil ? "tamil" : ""}>
                            {this.state.GradeError === '' ? null : <div className="error-msg">{this.state.GradeError}</div>}
                        </FormText>
                    </div>
                </FormGroup>

                <FormGroup row className="p-2">
                    <Label className="col-5 col-md-4 text-center" for={`Member${this.props.number}Org`} ><div className={`form-label ${this.props.tamil ? "tamil" : ""}`} >{ this.props.tamil ? "அமைப்பு:" : "Organisation:"}</div></Label>
                    <div className="col-7 col-md-6 justify-content-center">
                        <Input type="string"  id={`Member${this.props.number}Org`} placeholder={ this.props.tamil ? "அமைப்பு" : "Organisation"}
                            value={this.state.Organisation} onChange={(e) => this.memberOrgChange(e)} />
                        <FormText  className={this.props.tamil ? "tamil" : ""}>
                            {this.state.OrgError === '' ? null : <div className="error-msg">{this.state.OrgError}</div>}
                        </FormText>
                    </div>
                </FormGroup>

                <FormGroup row className="p-2">
                    <Label className="col-4 text-center" for={`Member${this.props.number}Country`} ><div className={`form-label ${this.props.tamil ? "tamil" : ""}`} >{ this.props.tamil ? "தேசம்:" : "Country:"}</div></Label>
                    <div className="col-8 col-md-6 justify-content-center">
                        <Input type="string"  id={`Member${this.props.number}Country`} placeholder={ this.props.tamil ? "தேசம்" : "Country"}
                            value={this.state.Country} onChange={(e) => this.memberCountryChange(e)} />
                        <FormText  className={this.props.tamil ? "tamil" : ""}>
                            {this.state.CountryError === '' ? null : <div className="error-msg">{this.state.CountryError}</div>}
                        </FormText>
                    </div>
                </FormGroup>

            </div>
        )
    }
}
    

export default MemberForm;