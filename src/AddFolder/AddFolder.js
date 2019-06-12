import React, { Component } from "react";
import NotefulForm from "../NotefulForm/NotefulForm";
import NotefulContext from "../NotefulContext";
import config from "../config";
import "./AddFolder.css";
import ValidationError from "../ErrorBoundaries/ValidationError";

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
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
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

  validateFolderName(fieldValue) {
    const fieldErrors = { ...this.state.validationMessages };
    let hasError = false;

    fieldValue = fieldValue.trim();
    if (fieldValue.length === 0) {
      fieldErrors.folderName = "Folder Name is required";
      hasError = true;
    } else {
      if (fieldValue.length > 20) {
        fieldErrors.folderName = "Name cannot be longer than 20 characters";
        hasError = true;
      } else {
        fieldErrors.folderName = "";
        hasError = false;
      }
    }
    this.setState(
      {
        validationMessages: fieldErrors,
        folderNameValid: !hasError
      },
      this.formValid
    );
  }

  formValid() {
    this.setState({
      formValid: this.state.folderNameValid
    });
  }

  updateFolderName(folderName) {
    this.setState({ folderName }, () => {
      this.validateFolderName(folderName);
    });
  }

  render() {
    return (
      <section className="AddFolder">
        <h2>Create a folder</h2>
        <NotefulForm onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="folder-name-input">Name</label>
            <input type="text" id="folder-name-input" name="folder-name" />
            <ValidationError
              hasError={!this.context.folderNameValid}
              message={this.context.validationMessages.folderName}
            />
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
