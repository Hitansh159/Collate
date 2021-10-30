import "./App.css";
import ErrorPage from "./components/errorPage/errorPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Editor from "./components/editor/editor";
import Preview from "./components/preview/preview";
import Home from "./components/home/home";
import LoginPage from "./components/login/login";
import { useSelector } from "react-redux";

function App() {
  const user = localStorage.getItem("payload") || true;

  const Theme = useSelector((state) => (state.Theme));

  if(Theme)
   document.documentElement.classList.add('dark');
  else
    document.documentElement.classList.remove('dark');



  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/editor" exact component={Editor} />
        <Route
          path="/resource/:id"
          exact
          component={() => (user ? <Preview /> : <Redirect to="/login" />)}
        />
        <Route path="/logout" component={()=>{
          localStorage.removeItem('userInfo');
          return <Redirect to='/' />
        }}/>
        <Route component={ErrorPage} />
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
