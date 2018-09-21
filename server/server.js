const express = require('express');
const bodyParser = require('body-parser');

//Controllers
const usersCtrl = require('./usersCtrl');



const app = express();

app.use(bodyParser.json());

//ENDPOINTS
app.get('/api/users', usersCtrl.getAllUsers);

app.get('/api/users/:userid', usersCtrl.getUserById);

app.get('/api/admins', usersCtrl.getAdmins);

app.get('/api/nonadmins', usersCtrl.getNonAdmins);

app.get('/api/user_type/:userType', usersCtrl.getUsersByType);

app.put('/api/users/:id', usersCtrl.updateUser);

app.post('/api/users', usersCtrl.addUser);

app.delete('/api/users/:id', usersCtrl.deleteUser);

const port = 3000;
app.listen(port, () => console.log(`Server running on Port: ${port}`));