
import { Route, Switch , Redirect } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch >
                <Route path="/Home" component={() => <Home />} />

               {/*  <Route path="/Home" render={(props) => {
                    if (auth.isAuthenticated()) {
                        return <Home {...props} />;
                    } 
                    else {
                        return <OpenHome {...props} />;
                    }}} /> */}


                <Redirect to="/Home"/>
      </Switch>

    </div>
  );
}

export default App;
