import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotefulContext from "../NotefulContext";
import { countNotesForFolder } from "../notes-helper";
import "./NoteListNav.css";

export default class NoteListNav extends React.Component {
  static contextType = NotefulContext;

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
