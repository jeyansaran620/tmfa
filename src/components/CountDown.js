import React from 'react';

import { CountDownDaily } from '@nilevia/count-down-timer-react'
import '@nilevia/count-down-timer-react/dist/index.css'
 


class CountDown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render()
    {
        return (
                <div className = "countdown-style text-center">
                    <div className="countdown-title">Registration Opens in </div>
                 <CountDownDaily
                    endDate={new Date('02/10/2021 00:00:00').toISOString()} operator=":"
                    dayAffix="days"   hourAffix=""
                    minutesAffix=""  secondAffix="" />
                </div>
        )
    }
}

export default CountDown;