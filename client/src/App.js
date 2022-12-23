import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Create from "./components/Create";
import { DetailsFromDog } from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Create" component={Create} />
        <Route path="/dogs/:id" component={DetailsFromDog} />
      </div>
    </BrowserRouter>
  );
}

export default App;
