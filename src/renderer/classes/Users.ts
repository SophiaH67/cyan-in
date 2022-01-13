import fs from 'fs';
import User from './User';

export default class Users {
  users: User[];

  constructor() {
    this.users = [];
  }

  getUsers() {
    if (this.users.length !== 0) return this.users;

    // Get all users in a linux system
    let users = fs.readdirSync('/home');
    // Filter out all the symbolic links
    users = users.filter(
      (user) => !fs.lstatSync(`/home/${user}`).isSymbolicLink()
    );
    // Create a new user object for each user
    const userObjects = users.map((user) => new User(user));
    // Return the user objects
    return userObjects;
  }
}
