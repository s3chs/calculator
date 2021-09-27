import Calculator from "./Components/Calculator/Calculator";
import Home from "./Components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ContextProvider from "./context/langContext";
import PrivateRoute from "./Components/PrivateRoute";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import WelcomePage from "./Components/WelcomePage/WelcomePage";

function App() {
  return (
    <AuthProvider>
      <ContextProvider>
        <ToggleLangs />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/auth" component={Home} />
            <PrivateRoute exact path="/calculator" component={Calculator} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </AuthProvider>
  );
}

export default App;
