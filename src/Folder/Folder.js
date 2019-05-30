import React from "react";
import "./Folder.css";

class Folder extends React.Component {
  staticDefaultProps = {
    folders: []
  };
  render() {
    const { folders } = this.props;
    const folder = folders.find(
      folder => folder.id === folders.match.params.folderId
    );
    return (
      <div className="folder">
        <h3>{folder.title}</h3>
        {folder.content.map((n, i) =>
          n === "" ? <br key={i} /> : <p key={i}>{n}</p>
        )}
      </div>
    );
  }
}

export default Folder;
