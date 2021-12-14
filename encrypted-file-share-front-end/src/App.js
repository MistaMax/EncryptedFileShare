//import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import FileUpload from './pages/file-upload';
import Navbar from "./components/navbar.component";
import Home from "./pages/home";
import Login from "./pages/login";


function App() {
  /*return (
    <div>
      <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/uploadfiles">
        <FileUpload />
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );*/
  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;
