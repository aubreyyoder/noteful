import React from "react";
import { Link } from "react-router-dom";
import "./Folder.css";

class Folder extends React.Component {
  render() {
    return (
      <div className="folder">
        <h3>
          <Link to="/folder">{this.props.title}</Link>
        </h3>
      </div>
    );
  }
}

export default Folder;
