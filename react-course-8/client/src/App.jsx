import { Router, Route, Switch } from "react-router-dom";

import StreamCreate from "./components/streams/StreamCreate";
import StreamEdit from "./components/streams/StreamEdit";
import StreamDelete from "./components/streams/StreamDelete";
import StreamList from "./components/streams/StreamList";
import StreamShow from "./components/streams/StreamShow";

//history
import history from "./history";

//components
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch> {/* //switch will only show one route at a time */}
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
