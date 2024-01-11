import React from "react";
import { Link, withRouter } from "react-router-dom";
import ListItem from "@mui/material/ListItem";

import { logoutHandler } from "../../Utils/tools";

const AdminNav = (props) => {
  const links = [
    {
      title: "Matches",
      linkTo: "/admin_matches",
    },
    {
      title: "Players",
      linkTo: "/admin_players",
    },
  ];

  const renderItems = () =>
    links.map((item) => (
      <Link to={item.linkTo} key={item.title}>
        <ListItem button className="admin_nav_link">
          {item.title}
        </ListItem>
      </Link>
    ));

  return (
    <div>
      {renderItems()}
      <ListItem
        button
        className="admin_nav_link"
        onClick={() => logoutHandler()}
      >
        Log Out
      </ListItem>
    </div>
  );
};

export default withRouter(AdminNav);
