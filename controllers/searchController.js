import url from 'url';
import path from 'path';

import usersStorage from '../storages/usersStorage.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = path.join(__dirname, '../');

const searchUser = function (text) {
  const users = usersStorage.getUsers();
  const userFound = users.filter(user => {
    const searchString = text.toLowerCase();
    const fullName = `${user.firstName}${user.lastName}`.toLowerCase();
    
    if(fullName.includes(searchString)) return true;
  });

  return userFound
}

const searchController = {
  searchUserGet: (req, res) => {
    const {search} = req.query;
    const usersMatched = searchUser(search);
    res.render(path.join(__root, '/views/pages', 'searchedUsers'), {users: usersMatched});
  }
}

export default searchController