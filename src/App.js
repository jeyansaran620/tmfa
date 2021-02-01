
import { Route, Switch , Redirect } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import FormSuccess from './components/FormSuccess';
import RegisteredTeams from './components/RegisteredTeams';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch >
                <Route path="/Home" component={() => <Home />} />
                
                <Route path="/RegisteredTeams" component={() => <RegisteredTeams />} />

                <Route path="/FormSuccess/:id" render={(props) =>  <FormSuccess {...props} />} />

                <Redirect to="/Home"/>
      </Switch>

    </div>
  );
}

export default App;
