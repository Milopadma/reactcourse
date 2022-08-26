import React from "react";
import Axios from "axios";
const { useState, useEffect } = React;

const URL = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Add code here to fetch some users with axios and the URL variable]
    const fetchUsers = async () => {
      const { data } = await Axios.get(URL);
      setUsers(data);
      console.log(data);
    };
    fetchUsers();
    // then update the 'users' piece of state
  }, []);

  const renderedUsers = users.map((user) => {
    return <li key={user.id}>{user.name}</li>;
  });

  return <ul>{renderedUsers}</ul>;
};

export default Users;
