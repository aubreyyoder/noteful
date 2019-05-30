import React from "react";
import { NavLink } from "react-router-dom";
import "./FolderList.css";

class FolderList extends React.Component {
  render() {
    return (
      <div className="folder-list">
        <h3>
          <NavLink to="/folder">{this.props.title}</NavLink>
        </h3>
      </div>
    );
  }
}

export default FolderList;
