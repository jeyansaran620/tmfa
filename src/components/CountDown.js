import React from 'react';
import { withRouter } from 'react-router-dom';
import CountDownTimer from '@inlightmedia/react-countdown-timer';

import {  Button } from 'reactstrap';


class CountDown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            timerText: this.props.tamil ? "பதிவு திறக்க இன்னும்" : "Registration Opens in",
            TimerDate: new Date('02/10/2021 00:00:00').toISOString(),
            count : 1,
        };
    }

    changeClosing = (count) =>
    {
        if (count === 1)
        {
            this.setState({
                timerText: this.props.tamil ? "பதிவு மூட இன்னும்" : "Registration Closes in",
                TimerDate: new Date('02/26/2021 00:00:00').toISOString(),
                count : 2
            })
        }
        else if (count === 2)
        {
            this.setState({
                timerText: this.props.tamil ? "பதிவு மூடப்பட்டது" : "Registration Closed",
                count : 3
            })
        }
    }

    render()
    {
        return (
                <div className = "countdown-style text-center">
                    <div className="countdown-title"> {this.state.timerText}</div>

                    { this.state.count === 1 ?
                    <CountDownTimer className="countdown-date" dateTime={this.state.TimerDate}
                    shouldShowTimeUnits={true} shouldShowSeparator={false}
                    shouldHidePrecedingZeros={true} onCountdownCompletion={() => this.changeClosing(this.state.count)}/>
                    : null}

                    { this.state.count === 2 ?
                    <CountDownTimer className="countdown-date" dateTime={this.state.TimerDate}
                    shouldShowTimeUnits={true} shouldShowSeparator={false}
                    shouldHidePrecedingZeros={true} onCountdownCompletion={() => this.changeClosing(this.state.count)}/>
                    : null}

                    <Button className="countdown-button" onClick={() => this.props.history.push(`/Register`)} disabled={this.state.count!==2} >{this.props.tamil ? "பதிவு செய்ய" : "Register"}</Button>
                </div>
        )
    }
}

export default withRouter(CountDown);