import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotefulContext from "../NotefulContext";
import { countNotesForFolder } from "../notes-helper";
import "./NoteListNav.css";
import config from "../config";

export default class NoteListNav extends React.Component {
  static defaultProps = {
    onDeleteFolder: () => {}
  };
  static contextType = NotefulContext;

  handleDeleteFolder(e) {
    e.preventDefault();
    const folderId = this.props.id;

    fetch(`${config.API_ENDPOINT}/folders/${folderId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.deleteFolder(folderId);
        this.props.onDeleteFolder(folderId);
      })
      .catch(error => {
        console.error({ error });
      });
  }

  render() {
    const { folders = [], notes = [] } = this.context;
    return (
      <div className="NoteListNav">
        <ul className="NoteListNav__list">
          {folders.map(folder => (
            <li key={folder.id}>
              <NavLink
                className="NoteListNav__folder-link"
                to={`/folder/${folder.id}`}
              >
                <span className="NoteListNav__num-notes">
                  {countNotesForFolder(notes, folder.id)}
                </span>
                {folder.name}
              </NavLink>
              <button
                className="folder-delete"
                type="button"
                onclick={this.handleDeleteFolder}
              >
                REMOVE ^^
              </button>
            </li>
          ))}
        </ul>
        <div className="NoteListNav__button-wrapper">
          <Link
            to="/add-folder"
            type="button"
            className="NoteListNav__add-folder-button"
          >
            <FontAwesomeIcon icon="plus" />
            <br />
            Add Folder
          </Link>
        </div>
      </div>
    );
  }
}
