import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import MainMenu from './MainMenu/MainMenu.js';
import Login from './Login/Login.js';
import Articles from './Articles/Articles.js';

//main structure project
const AppContainer = () => {
  return (
    <div>
      <div>
        <MainMenu />
      </div>
      <div>
        <Route path={'/login'} render={() => <Login />} />
        <Route path={'/articles'} render={() => <Articles />} />
      </div>
    </div >
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  )
}
export default App;