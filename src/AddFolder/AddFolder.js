import React, { Component } from "react";
import NotefulForm from "../NotefulForm/NotefulForm";
import NotefulContext from "../NotefulContext";
import config from "../config";
import "./AddFolder.css";

class AddFolder extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  static contextType = NotefulContext;

  handleSubmit = e => {
    e.preventDefault();
    const folder = {
      name: e.target["folder-name-input"].value
    };
    fetch(`${config.API_ENDPOINT}/folders`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(folder)
    })
      .then(res => {
        console.log(folder);
        this.context.addFolder(folder);
        this.props.history.push(`/folder/${folder.id}`);
      })
      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    return (
      <section className="AddFolder">
        <h2>Create a folder</h2>
        <NotefulForm onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="folder-name-input">Name</label>
            <input type="text" id="folder-name-input" name="folder-name" />
          </div>
          <div className="buttons">
            <button type="submit">Add folder</button>
          </div>
        </NotefulForm>
      </section>
    );
  }
}

export default AddFolder;
