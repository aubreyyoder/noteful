import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Main from "./Main/Main";
import Folder from "./Folder/Folder";
import Note from "./Note/Note";
import "./App.css";

const notes = [
  {
    id: 0,
    title: "Note 1",
    dateModified: "01/02/2019",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s..."
  },
  {
    id: 1,
    title: "Note 2",
    dateModified: "05/02/2019",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s..."
  },
  {
    id: 2,
    title: "Note 3",
    dateModified: "12/02/2019",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s..."
  }
];

const folders = [
  {
    id: 0,
    title: "Folder 1",
    content: notes
  },
  {
    id: 1,
    title: "Folder 2",
    content: notes
  },
  {
    id: 2,
    title: "Folder 3",
    content: notes
  }
];

class App extends React.Component {
  state = {
    folders,
    notes
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <Route
            exact
            path="/"
            render={() => <Main folders={folders} notes={notes} />}
          />
        </main>
        <Switch>
          <Route
            path="/folder/:folderId"
            render={() => <Folder folders={folders} />}
          />
          <Route path="/note/note:id" render={() => <Note notes={notes} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
