import React from "react";
import { NavLink } from "react-router-dom";
import "./Folder.css";

class Folder extends React.Component {
  render() {
    return (
      <div className="folder">
        <h3>
          <NavLink to="/folder">{this.props.title}</NavLink>
        </h3>
      </div>
    );
  }
}

export default Folder;
