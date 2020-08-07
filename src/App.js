import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import * as Pages from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exac path="/signup" component={Pages.LoginPage} />
        <Route exac path="/main" component={Pages.LoginPage} />
        <Route exac path="/post" component={Pages.PostListPage} />
        <Route exac path="/" component={Pages.LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}
// class App extends Component {
//   render(){
//     return (
//       <div>
//         <Header>

//         </Header>
//         <Body>

//         </Body>
//       </div>
//     );
//   }
// }

export default App;
