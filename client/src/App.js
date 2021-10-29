import "./App.css";
import ErrorPage from "./components/errorPage/errorPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Editor from "./components/editor/editor";
import Preview from "./components/preview/preview";
import Home from "./components/home/home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/editor" exact component={Editor} />
        <Route path="/resource/:id" exact component={Preview} />
        {/* <Route
          path="/auth"
          exact
          component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
        /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
