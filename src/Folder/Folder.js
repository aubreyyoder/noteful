import React from "react";
import "./Folder.css";

class Folder extends React.Component {
  render() {
    return (
      <div className="folder">
        <h3>
          <a href="/folder">{this.props.title}</a>
        </h3>
      </div>
    );
  }
}

export default Folder;
