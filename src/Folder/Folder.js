import React from "react";
import "./Folder.css";

class Folder extends React.Component {
  staticDefaultProps = {
    folders: []
  };
  render() {
    const { folders } = this.props;
    const folder = folders.find(f => f.id === folders.match.params.folderId);
    return (
      <div className="folder">
        <h3>{folder.title}</h3>
        {folder.content.map((f, i) =>
          f === "" ? <br key={i} /> : <p key={i}>{f}</p>
        )}
      </div>
    );
  }
}

export default Folder;
