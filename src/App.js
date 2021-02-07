import React from 'react';
import { Route, Switch , Redirect } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import FormSuccess from './components/FormSuccess';
import RegisteredTeams from './components/RegisteredTeams';
import Footer from './components/Footer';

class App extends React.Component{
  
  constructor(props) {
      super(props);
      this.state = {
          tamil: false
      };
    }

    switchChange = () =>
    {
        this.setState({
            tamil: !this.state.tamil
        });
    }

      render()
      {
      return (
    <div className="App">
      <NavBar tamil={this.state.tamil} switchChange={this.switchChange}  />
      <Switch >
                <Route path="/Niralkalam" component={() => <Home tamil={this.state.tamil} />} />
                
                <Route path="/Register" component={() => <Register tamil={this.state.tamil} />} />

                <Route path="/AboutUs" component={() => <AboutUs tamil={this.state.tamil} />} />

                <Route path="/RegisteredTeams" component={() => <RegisteredTeams />} />

                <Route path="/FormSuccess/:id" render={(props) =>  <FormSuccess tamil={this.state.tamil} {...props} />} />

                <Redirect to="/Niralkalam"/>
      </Switch>
      <Footer  tamil={this.state.tamil}/>
    </div>
  );
  }
}

export default App;
