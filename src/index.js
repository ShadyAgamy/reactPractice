import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import "./index.scss"

import reducers from './redux/reducers/index';
const persistenceConfigs = {
  key: 'root', // whatever you want to keep as your key
  storage
};
const persistedReducer = persistReducer(persistenceConfigs, reducers);

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(persistedReducer,  composeEnhancers(applyMiddleware(reduxThunk) ));

 const persistor = persistStore(store)

 
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null}  persistor={persistor}>
    <App />
  </PersistGate>
   
  </Provider>,
  document.querySelector('#root')
);

