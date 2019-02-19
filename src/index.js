import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers'


const store = createStore(rootReducer, applyMiddleware(logger))

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
) 

ReactDOM.render(<MyApp />, document.getElementById('root'))
