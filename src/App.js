import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import RootRouter from './router/root-router';
import HeaderNav from './components/common/HeaderNav';
import './App.css';
import {Provider}  from 'react-redux'
import store from './reducers/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <HeaderNav />
          <div className="container">
            <RootRouter />
          </div>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
