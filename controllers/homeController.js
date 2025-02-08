import url from 'url';
import path from 'path';

import usersStorage from '../storages/usersStorage.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = path.join(__dirname, '../');

const homeController = {
  getHomeView: (req, res) => {
   
    res.render(path.join(__root, '/views/pages', 'home'), {users: usersStorage.getUsers()});
  }
}

export default homeController;