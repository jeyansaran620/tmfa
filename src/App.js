
import { Route, Switch , Redirect } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import FormSuccess from './components/FormSuccess';
import RegisteredTeams from './components/RegisteredTeams';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch >
                <Route path="/Niralkalam" component={() => <Home />} />
                
                <Route path="/Register" component={() => <Register />} />

                <Route path="/AboutUs" component={() => <AboutUs />} />

                <Route path="/RegisteredTeams" component={() => <RegisteredTeams />} />

                <Route path="/FormSuccess/:id" render={(props) =>  <FormSuccess {...props} />} />

                <Redirect to="/Niralkalam"/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
