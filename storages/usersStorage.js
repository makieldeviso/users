class UsersStorage {
  constructor () {
    this.storage = {};
    this.id = 0;
  }

  addUser({firstName, lastName, email, age, bio}) {
    const id = this.id;
    const newUser = {id, firstName, lastName, email, age, bio};
    this.storage[this.id] = newUser;
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, {firstName, lastName, email, age, bio}) {
    this.storage[id] = {id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }

}

const usersStorage = new UsersStorage();
usersStorage.addUser({firstName: 'Fred', lastName:'Baldeviso', email: 'fred.baldeviso@email.com', age: 27, bio: 'hello im fred'});
usersStorage.addUser({firstName: 'Ervin', lastName:'Rinos', email: 'ervin.rinos@email.com', age: 27, bio: 'hello im ervin'});
usersStorage.addUser({firstName: 'Charles', lastName:'Derion', email: 'charles.derion@email.com', age: 27, bio: 'hello im charles'});
usersStorage.addUser({firstName: 'Christian', lastName:'Bardalo', email: 'christian.bardalo@email.com', age: 27, bio: 'hello im christian'});

export default usersStorage;