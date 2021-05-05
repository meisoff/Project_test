import './App.scss';
import {HashRouter, Route} from "react-router-dom";
import FirstPageContainer from "./components/FirstPage/FirstPageContainer";
import SecondPageContainer from "./components/SecondPage/SecondPageContainer";

function App(props) {
  return (
      <HashRouter>
          <div className="container">
              <Route exact path="/" render={() => <FirstPageContainer appState={props.appState} dispatch={props.dispatch}/> } />
              <Route exact path="/second_page" render={() => <SecondPageContainer appState={props.appState} dispatch={props.dispatch}/> } />
          </div>
      </HashRouter>
  );
}

export default App;
