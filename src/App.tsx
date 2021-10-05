import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Plants from "./components/Plants";
import Plant from "./components/Plant";
import Home from "./components/Home";
import Add from "./components/Add";
import Layout2 from "./components/Layout2";
import Layout1 from "./components/Layout1";
import Login from "./components/Login";
import { AuthProvider } from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";
import DeletePlants from "./components/DeletePlants";
import { AlertProvider } from "./AlertContext";

function App() {
  return (
    <AuthProvider>
      <AlertProvider>
        <Router>
          <Switch>
            <Route path="/plants/:slug">
              <Layout2>
                <Plant />
              </Layout2>
            </Route>
            <Route path="/plants">
              <Layout2>
                <Plants />
              </Layout2>
            </Route>
            <Route path="/login">
              <Layout2>
                <Login />
              </Layout2>
            </Route>
            <Route exact path="/">
              <Layout1>
                <Home />
              </Layout1>
            </Route>
            <PrivateRoute>
              <Route path="/delete">
                <Layout2>
                  <DeletePlants />
                </Layout2>
              </Route>
              <Route path="/add">
                <Layout2>
                  <Add />
                </Layout2>
              </Route>
            </PrivateRoute>
          </Switch>
        </Router>
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;
