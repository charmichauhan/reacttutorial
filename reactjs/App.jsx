// import React from 'react';
//
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.headerProp}</h1>
//                 <h2>{this.props.contentProp}</h2>
//             </div>
//         );
//     }
// }
//
// export default App;

// import React from 'react';
//
// class App extends React.Component {
//     constructor() {
//         super();
//
//         this.state = {
//             data: []
//         }
//
//         this.setStateHandler = this.setStateHandler.bind(this);
//     };
//
//     setStateHandler() {
//         var item = "setState...";
//         var myArray = this.state.data;
//         myArray.push(item);
//         this.setState({data: myArray})
//     };
//
//     render() {
//         return (
//             <div>
//                 <button onClick = {this.setStateHandler}>SET STATE</button>
//                 <h4>State Array: {this.state.data}</h4>
//             </div>
//         );
//     }
// }
//
// export default App;

// import React from 'react';
//
// class App extends React.Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             data: 0
//         }
//
//         this.setNewNumber = this.setNewNumber.bind(this)
//     };
//
//     setNewNumber() {
//         this.setState({data: this.state.data + 1})
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick = {this.setNewNumber}>INCREMENT</button>
//                 <Content myNumber = {this.state.data}></Content>
//             </div>
//         );
//     }
// }
//
// class Content extends React.Component {
//
//     componentWillMount() {
//         console.log('Component WILL MOUNT!')
//     }
//
//     componentDidMount() {
//         console.log('Component DID MOUNT!')
//     }
//
//     componentWillReceiveProps(newProps) {
//         console.log('Component WILL RECIEVE PROPS!')
//     }
//
//     shouldComponentUpdate(newProps, newState) {
//         return true;
//     }
//
//     componentWillUpdate(nextProps, nextState) {
//         console.log('Component WILL UPDATE!');
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         console.log('Component DID UPDATE!')
//     }
//
//     componentWillUnmount() {
//         console.log('Component WILL UNMOUNT!')
//     }
//
//     render() {
//         return (
//             <div>
//                 <h3>{this.props.myNumber}</h3>
//             </div>
//         );
//     }
// }
//
// export default App;

// import React from 'react';
//
// class App extends React.Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             data: 'Initial Data'
//         }
//
//         this.updateState = this.updateState.bind(this);
//     };
//
//     updateState() {
//         this.setState({data: 'Data updated from the child component...'})
//     }
//
//     render() {
//         return (
//             <div>
//                 <Content myDataProp = {this.state.data}
//                          updateStateProp = {this.updateState}></Content>
//             </div>
//         );
//     }
// }
//
// class Content extends React.Component {
//
//     render() {
//         return (
//             <div>
//                 <button onClick = {this.props.updateStateProp}>CLICK</button>
//                 <h3>{this.props.myDataProp}</h3>
//             </div>
//         );
//     }
// }
//
// export default App;




// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             data: ''
//         }
//
//         this.updateState = this.updateState.bind(this);
//         this.clearInput = this.clearInput.bind(this);
//     };
//
//     updateState(e) {
//         this.setState({data: e.target.value});
//     }
//
//     clearInput() {
//         this.setState({data: ''});
//         ReactDOM.findDOMNode(this.refs.myInput).focus();
//     }
//
//     render() {
//         return (
//             <div>
//                 <input value = {this.state.data} onChange = {this.updateState}
//                        ref = "myInput"></input>
//                 <button onClick = {this.clearInput}>CLEAR</button>
//                 <h4>{this.state.data}</h4>
//             </div>
//         );
//     }
// }
//
// export default App;


// import React, { Component } from 'react';
// import {  Link } from 'react-router';
//
// const App = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <ul>
//                     <li><Link to="/Home">Home</Link>></li>
//                     <li><Link to="/About">About</Link>></li>
//                     <li><Link to="/Contact">Contact</Link>></li>
//                 </ul>
//
//                 {this.props.children}
//             </div>
//         );
//     }
// });
//
// export default App;

// import React from 'react';
// //var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//
// class App extends React.Component {
//
//     render() {
//         return (
//             <div>
//                 <ReactCSSTransitionGroup transitionName = "example"
//                                          transitionAppear = {false} transitionAppearTimeout = {10000}
//                                          transitionEnter = {true} transitionLeave = {true}>
//
//                     <h1>My Element...</h1>
//                 </ReactCSSTransitionGroup>
//             </div>
//         );
//     }
// }
//
// export default App;

import React from 'react';
 import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import  ReactTransitionGroup from 'react-addons-transition-group';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: ['Item 1...', 'Item 2...', 'Item 3...', 'Item 4...']
        };

        this.handleAdd = this.handleAdd.bind(this);
    };

    handleAdd() {
        var newItems = this.state.items.concat([prompt('Create New Item')]);
        this.setState({items: newItems});
    }

    handleRemove(i) {

        var newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }

    render() {
        var items = this.state.items.map(function(item, i) {
            return (
                <div key = {item} onClick = {this.handleRemove.bind(this, i)}>
                    {item}
                </div>
            );

        }.bind(this));

        return (
            <div>
                <button onClick = {this.handleAdd}>Add Item</button>

                <ReactCSSTransitionGroup transitionName = "example" transitionEnterTimeout = {5000} transitionLeaveTimeout = {5000}>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default App;


// import React from 'react';
// import {render} from 'react-dom';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//
//
// const Home1 = () => {
//     return (
//         <div>
//             <ReactCSSTransitionGroup transitionName="example"
//                                      transitionAppear={true}
//                                      transitionAppearTimeout={10000}
//                                      transitionEnter={false}
//                                      transitionLeave={false}>
//                 <h2>{' Welcome to React Animations'}</h2>
//             </ReactCSSTransitionGroup>
//         </div>
//
//     );
// };
// render(
//     <Home1 />,
//     document.getElementById('app')
// );
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.add = this.add.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             data: [],
//             name:''
//         };
//     }
//     add(){
//         var arr = this.state.data.slice();
//         arr.push({'id':(new Date()).getTime(),'name':this.state.name});
//         this.setState({data:arr})
//     }
//     handleChange(e){
//         this.setState({name:e.target.value})
//     }
//     render() {
//         return (
//             <div>
//                 Enter Name <input onChange={this.handleChange} type="text" /> <input onClick={this.add} type="button" value="Add" />
//
//                 <ul>
//                     <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionEnterTimeout={10000} transitionEnter={false} transitionLeave={false}>
//                         {
//                             this.state.data.map(function(player) {
//                                 return <li key={player.id}>{player.name}</li>
//                             })
//                         }
//                     </ReactCSSTransitionGroup>
//                 </ul>
//
//             </div>
//         )
//     }
// }
//
// render(
//     <App />,
//     document.getElementById('app')
// );


