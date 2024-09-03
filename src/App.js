import { HashRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import CreateNote from "./pages/CreateNote";
import Home from "./pages/Home";
import NotePreview from "./pages/NotePreview";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/create">
                        <CreateNote />
                    </Route>
                    <Route path="/notes/:id">
                        <NotePreview />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
