import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./Aboutus.css";

import Navbar from "./components/Navbar";
import Cardings from "./components/Cardings";
import RemoteCont from "./components/RemoteCont";
import Footer from "./components/Footer";
import News from "./components/News";
import Home from "./components/Home";
import Login from "./components/Login";
import RsTypes from "./components/RsTypes";
import MultiSpectral from "./components/MultiSpectral";
import Active from "./components/Active";
import Passive from "./components/Passive";
import Diploma from "./components/Diploma";
import UG from "./components/UG";
import Phd from "./components/Phd";
import Dashboard from "./components/Dashboard";
import Notes from "./components/Notes";
import NoteState from "./components/context/notes/noteState";
import Register2 from "./components/Register2";
import VisionariesHub from "./components/Visionaries Hub";
import Login2 from "./components/Login2";
import Notenav from "./components/Notenav";
import NotePublic from "./components/NotePublic";
function App() {

  return (
    <>
    <NoteState>
    <Router>
      <Navbar title="PolsarLearn" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cardings" component={Cardings} />
        <Route exact path="/remote" component={RemoteCont} />
        <Route exact path="/news" component={News} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Login" component={Login2} />
        {/* <Route exact path="/register" component={Register} /> */}
        <Route exact path="/register" component={Register2} />
        <Route exact path="/RsTypes" component={RsTypes} />
        <Route exact path="/MultiSpectral" component={MultiSpectral} />
        <Route exact path="/Active" component={Active} />
        <Route exact path="/Passive" component={Passive} />
        <Route exact path="/Diploma" component={Diploma} />
        <Route exact path="/UnderGraduate" component={UG} />
        <Route exact path="/Phd" component={Phd} />
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/Dash" component={Dashboard} />
        <Route exact path="/Vhub" component={VisionariesHub} />
        {/* <Route exact path="/Register" component={Resgister3} /> */}
        <Route exact path="/npublic" component={NotePublic} />
      </Switch>
      <Footer />
    </Router>
    </NoteState>
    
    
    </>
  );
}

export default App;
