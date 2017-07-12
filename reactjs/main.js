// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
// import App from './App.jsx';

// import React, { Component } from 'react';
// import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
// import { App } from './App.jsx';
// import { Home } from './Home.jsx';
// import { About } from './About.jsx';
// import { Contact } from './Contact.jsx';
//
//
//
//
// export default (
//     <Router history = {browserHistory}>
//         <Route path = "/" component = {App}>
//             <IndexRoute component = {Home} />
//             <Route path = "/Home" component = {Home} />
//             <Route path = "/About" component = {About} />
//             <Route path = "/Contact" component = {Contact} />
//         </Route>
//     </Router>
//
// );

// import React from 'react'
//
// import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import App from './App.jsx'
// import todoApp from './reducers/reducers'
//
// let store = createStore(todoApp);
//
// let rootElement = document.getElementById('app');
//
// render(
//
//     <Provider store = {store}>
//         <App />
//     </Provider>,
//
//     rootElement
// );

// import React from 'react';
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
//
// class App extends React.Component {
//
//     render() {
//         return (
//             <div>
//                 <ReactCSSTransitionGroup transitionName = "example"
//                                          transitionAppear = {true} transitionAppearTimeout = {500}
//                                          transitionEnter = {false} transitionLeave = {false}>
//
//                     <h1>My Element...</h1>
//                 </ReactCSSTransitionGroup>
//             </div>
//         );
//     }
// }
//
// export default App;

import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));