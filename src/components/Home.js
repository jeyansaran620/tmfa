import React from 'react';
import { hostname } from '../hostname';
import { Card, Button, CardTitle } from 'reactstrap';
import MainForm from './MainForm';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Customers: null,
            Types: null,
            Tools : null,
            CusSearch : '',
            TypeSearch : '',
            ToolSearch : '',
            fetchError : ''
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