import url from 'url';
import path from 'path';
import usersStorage from '../storages/usersStorage.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = path.join(__dirname, '../');

const deleteController = {

  deleteUserPost: (req, res) => {
    const {id} = req.params;
    const {confirm} = req.body;
   
    if (confirm === 'no') {
      return res.redirect('/');
    }

    usersStorage.deleteUser(id);
    res.redirect('/')
  }

}

export default deleteController;