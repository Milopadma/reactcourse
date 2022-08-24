import React from "react";

const users = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" },
];

export default class Users extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: users
    }
  }
  showUsers = () => {
    return this.state.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render() {
    return (
      <ul>
        {this.showUsers()}
      </ul>
    );
  }
}

// const ListArray = (props) => {
//   const users = props.users.map((user) => {
//     return <li key={user.id}>{user.name}</li>;
//   });
//     return <ul>{users}</ul>;
// };
