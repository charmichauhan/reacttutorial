// // var numbers = [1,2,3];
// // var numbersPlusTen = numbers.map(function (num) {
// //     return num + 10
// // });
// // console.log(numbersPlusTen) // [11, 12, 13]
// import React from 'react';
//
// class FriendsContainer extends React.Component {
//     render() {
//         var name = 'Tyler McGinnis';
//         var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'];
//         return (
//             <div>
//                 <h3> Name: {name} </h3>
//                 <ShowList names={friends} />
//             </div>
//         );
//     }
// }
//
// class ShowList extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h3> Friends </h3>
//                 <ul>
//                     {this.props.names.map(function(friend){
//                         return <li> {friend} </li>;
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// }
//
// // var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'];
// // var listItems = friends.map(function(friend){
// //     return "<li> " + friend + "</li>";
// // });
// // console.log(listItems); // ["<li> Ean Platter </li>", "<li> Murphy Randall</li>", "<li> Merrick Christensen </li>"];

var React = require('react');
var PropTypes = require('prop-types');

class Users extends React.Component {
    render() {
        return (
            <ul>
                {this.props.list.map(function (friend) {
                    return <li>{friend}</li>
                })}
            </ul>
        );
    }
}
Users.propTypes = {
    list: PropTypes.array.isRequired
};

