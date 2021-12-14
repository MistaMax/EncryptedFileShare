//import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import FileUpload from './file-upload';
import Navbar from "./navbar";
import Home from "./home";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/upload">
        <FileUpload />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
