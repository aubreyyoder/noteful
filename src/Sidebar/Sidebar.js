import React from "react";
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
            <Folder key={folder.id} {...folder} />
          ))}
        </ul>
        <button for="add-folder" name="add-folder">
          Add Folder
        </button>
      </div>
    );
  }
}

export default Sidebar;
