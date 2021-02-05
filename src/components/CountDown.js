import React from 'react';
import { withRouter } from 'react-router-dom';
import CountDownTimer from '@inlightmedia/react-countdown-timer';

import {  Button } from 'reactstrap';


class CountDown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            timerText:"Registration Opens in",
            TimerDate: new Date('02/10/2021 00:00:00').toISOString(),
            count : 1,
        };
    }

    changeClosing = (count) =>
    {
        if (count === 1)
        {
            this.setState({
                timerText: "Registration Closes in",
                TimerDate: new Date('02/26/2021 00:00:00').toISOString(),
                count : 2
            })
        }
        else if (count === 2)
        {
            this.setState({
                timerText: "Registration Closed",
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
                    <CountDownTimer dateTime={this.state.TimerDate}
                    shouldShowTimeUnits={true} shouldShowSeparator={false}
                    shouldHidePrecedingZeros={true} onCountdownCompletion={() => this.changeClosing(this.state.count)}/>
                    : null}

                    { this.state.count === 2 ?
                    <CountDownTimer dateTime={this.state.TimerDate}
                    shouldShowTimeUnits={true} shouldShowSeparator={false}
                    shouldHidePrecedingZeros={true} onCountdownCompletion={() => this.changeClosing(this.state.count)}/>
                    : null}

                    <Button onClick={() => this.props.history.push(`/Register`)} disabled={this.state.count!==2} >Register</Button>
                </div>
        )
    }
}

export default withRouter(CountDown);