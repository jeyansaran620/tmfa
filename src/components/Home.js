import React from 'react';
import MainForm from './MainForm';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render()
    {
        return (
            <div>
                <MainForm />
            </div>
        )
    }
}

export default Home;