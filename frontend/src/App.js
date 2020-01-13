import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meetings from "./pages/Meetings";
import Ambassadors from "./pages/Ambassadors";
import Causes from "./pages/Causes";
import CauseInfos from "./pages/CauseInfos";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import "./App.scss";
import CampaignPage from "./pages/CampaignPage";
const { siteTitle } = require("./conf");

function App() {
  document.title = siteTitle;

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/meetings" component={Meetings}></Route>
        <Route path="/ambassadors" component={Ambassadors}></Route>
        <Route path="/causes/:id" component={CauseInfos}></Route>
        <Route path="/causes" component={Causes}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/campaign/:id" component={CampaignPage}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
