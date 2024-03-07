import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Components/header";
import Footer from "./Components/footer";
import Home from "./Components/Home";
import SignIn from "./Components/Signin";
import TheMatches from "./Components/TheMatches"
import NotFound from './Components/not_found';

import Dashboard from "./Components/Admin/dashboard";
import AdminPlayers from "./Components/Admin/players";
import AuthGuard from "./Hoc/Auth";
import AddEditPlayer from "./Components/Admin/players/addEditPlayers";
import TheTeam from './Components/TheTeam'
import AdminMatches from './Components/Admin/matches/index';
import AddEditMatch from './Components/Admin/matches/addEditMatch';

const Routes = ({ user }) => {
  return (
    <BrowserRouter>
      <Header user={user} />
      <Switch>
        <Route
          path="/admin_players/edit_player/:playerid"
          
          component={AuthGuard(AddEditPlayer)}
        />
        <Route
          path="/admin_players/add_player"
          
          component={AuthGuard(AddEditPlayer)}
        />
        <Route
          path="/admin_players"
          
          component={AuthGuard(AdminPlayers)}
        />
        <Route
          path="/admin_matches/edit_match/:matchid"
          
          component={AuthGuard(AddEditMatch)}
        />
        <Route
          path="/admin_matches/add_match"
          
          component={AuthGuard(AddEditMatch)}
        />
        <Route
          path="/admin_matches"
          
          component={AuthGuard(AdminMatches)}
        />
        <Route path="/dashboard" component={AuthGuard(Dashboard)} />
        <Route path="/the_team" component={TheTeam} />
        <Route
          path="/sign_in"
          
          component={(props) => <SignIn {...props} user={user} />}
        />
        <Route path="/the_matches"  component={TheMatches} />
        <Route path="/" exact component={Home} />
        <Route path="" exact component={NotFound} />
      </Switch>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
