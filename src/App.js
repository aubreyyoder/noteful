import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoteListNav from "./NoteListNav/NoteListNav";
import NotePageNav from "./NotePageNav/NotePageNav";
import NoteListMain from "./NoteListMain/NoteListMain";
import NotePageMain from "./NotePageMain/NotePageMain";
import AddFolder from "./AddFolder/AddFolder";
import AddNote from "./AddNote/AddNote";
import config from "./config";
import "./App.css";
import NotefulContext from "./NotefulContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: [],
      noteName: "",
      folderName: "",
      content: "",
      folderSelected: [],
      noteNameValid: false,
      folderNameValid: false,
      contentValid: false,
      folderSelectValid: false,
      formValid: false,
      validationMessages: {
        noteName: "",
        folderName: "",
        content: "",
        folderSelected: []
      }
    };
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok) return notesRes.json().then(e => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch(error => {
        console.error({ error });
      });
  }
  deleteFolder = folderId => {
    const newFolders = this.state.folders.filter(
      folder => folder.id !== folderId
    );
    this.setState({
      folders: newFolders
    });
  };

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({
      notes: newNotes
    });
  };

  addFolder = folder => {
    const newFolders = [...this.state.folders, folder];
    this.setState({
      folders: newFolders
    });
  };

  addNote = note => {
    const newNotes = [...this.state.notes, note];
    this.setState({
      notes: newNotes
    });
  };

  renderNavRoutes() {
    return (
      <>
        {["/", "/folder/:folderId"].map(path => (
          <Route exact key={path} path={path} component={NoteListNav} />
        ))}
        <Route path="/note/:noteId" component={NotePageNav} />
        <Route path="/add-folder" component={NotePageNav} />
        <Route path="/add-note" component={NotePageNav} />
      </>
    );
  }

  renderMainRoutes() {
    return (
      <>
        {["/", "/folder/:folderId"].map(path => (
          <Route exact key={path} path={path} component={NoteListMain} />
        ))}
        <Route path="/note/:noteId" component={NotePageMain} />
        <Route path="/add-folder" component={AddFolder} />
        <Route path="/add-note" component={AddNote} />
      </>
    );
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteFolder: this.deleteFolder,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote,
      noteName: this.state.noteName,
      folderName: this.state.folderName,
      content: this.state.content,
      folderSelected: this.state.folderSelected,
      noteNameValid: this.state.noteNameValid,
      folderNameValid: this.state.folderNameValid,
      contentValid: this.state.contentValid,
      folderSelectValid: this.state.folderSelectValid,
      formValid: this.state.formValid,
      validationMessages: {
        noteName: this.state.validationMessages.noteName,
        folderName: this.state.validationMessages.folderName,
        content: this.state.validationMessages.content,
        folderSelected: this.state.validationMessages.folderSelected
      }
    };
    return (
      <NotefulContext.Provider value={contextValue}>
        <div className="App">
          <nav className="App__nav">{this.renderNavRoutes()}</nav>
          <header className="App__header">
            <h1>
              <Link to="/">Noteful</Link>{" "}
              <FontAwesomeIcon icon="check-double" />
            </h1>
          </header>
          <main className="App__main">{this.renderMainRoutes()}</main>
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;
