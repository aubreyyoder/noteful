import React from "react";
import { Link } from "react-router-dom";
import FolderList from "../FolderList/FolderList";
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
            <FolderList key={folder.id} {...folder} />
          ))}
        </ul>
        <Link for="add-folder" name="add-folder" className="add-button">
          Add Folder
        </Link>
      </div>
    );
  }
}

export default Sidebar;
