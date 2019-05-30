import React from "react";
import "./SelectedFolder.css";

function findFolderByClass(folders, className) {
  return folders.filter(folder => {
    return folder.className === active;
  });
}

class SelectedFolder extends React.Component {
  render() {
    const { folders } = this.props;
    return <div className="folder">{this.findFolderByClass()}</div>;
  }
}

export default SelectedFolder;
