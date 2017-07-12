// function animationTimeout(step, interval) {
//     new Promise(function(resolve, reject) {
//         if (isAnimationSupported(step)) {
//             setTimeout(resolve, interval);
//         } else {
//             reject('animation not supported');
//         }
//     });
// }
//
// var firstKeyframe = animationTimeout(1, 1000);
// import React, { Component } from 'react';
//
// class Deferred extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: ''
//         };
//     }
//     componentDidMount() {
//         this.props.promise.then(value => {
//             this.setState({value});
//         });
//     }
//     render() {
//         const then = this.props.then || (value => {value});
//         return then(this.state.value);
//     }
// }
// //...
// // example
// <Deferred promise={somePromise} then={v => <b>{v}</b>} />

// Promise.delay(1000)
//     .then(function() {
//         return 5;
//     })
//     .then(function(value) {
//         console.log(value); // 5
//     });

let prom = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('a value')
    }, 100)
});
class ExampleWithoutAsync extends React.Component { // you can't use stateless component because you need a state
    constructor() {
        super();
        this.state = {};
        prom.then((value) => {
            this.setState({val: value})
        })
    }

    render() {
        if (!this.state.val) return;
        return <div>{this.state.val}</div>
    }
}
// import Async from 'react-promise'
//
// const ExampleWithAsync = (props) => <Async promise={prom} then={(val) => <div>{val}</div>/>