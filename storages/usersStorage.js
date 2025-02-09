class UsersStorage {
  constructor () {
    this.storage = {};
    this.id = 0;
  }

  addUser({firstName, lastName}) {
    const id = this.id;
    const newUser = {id, firstName, lastName};
    this.storage[this.id] = newUser;
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, {firstName, lastName}) {
    this.storage[id] = {id, firstName, lastName};
  }

  deleteUser(id) {
    delete this.storage[id];
  }

}

const usersStorage = new UsersStorage();
usersStorage.addUser({firstName: 'Fred', lastName:'Baldeviso'});
usersStorage.addUser({firstName: 'Ervin', lastName:'Rinos'});
usersStorage.addUser({firstName: 'Charles', lastName:'Derion'});
usersStorage.addUser({firstName: 'Christian', lastName:'Bardalo'});

export default usersStorage;