import React from "react";
import { Link } from "react-router-dom";
import Folder from "../Folder/Folder";
import "./Sidebar.css";

class Sidebar extends React.Component {
  static defaultProps = {
    folders: []
  };
  render() {
    const { folders } = this.props;
    return (
      <div className="Sidebar">
        <ul id="folder-list">
          {folders.map(folder => (
            <li key={folder.id}>
              <Link to={`/folder/${folder.id}`}>{folder.title}</Link>
            </li>
          ))}
        </ul>
        <Link to="/addfolder" className="add-button">
          Add Folder
        </Link>
      </div>
    );
  }
}

export default Sidebar;
