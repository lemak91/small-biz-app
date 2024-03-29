import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  );
}

export default App;
