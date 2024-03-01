import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { CityLogo } from "../Components/Utils/tools";
import { logoutHandler } from "../Components/Utils/tools";

const Header = ({ user }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#98c5e9",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "2px solid #00285e",
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <CityLogo link={true} linkTo={"/"} width="70px" height="70px" />
            </div>
          </div>

          <Link to="/the_team">
            <Button color="inherit">The Team</Button>
          </Link>
          <Link to="/the_matches">
            <Button color="inherit">Matches</Button>
          </Link>
          {!user ? <Link to="/Sign_in">
            <Button color="inherit">Log in</Button>
          </Link> 
          
          : null}

          {user ? (
            <>
              <Link to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </Link>
              <Button color="inherit" onClick={() => logoutHandler()}>
                Log Out
              </Button>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
