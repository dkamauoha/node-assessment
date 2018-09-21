const userData = require('../userData.json');

module.exports = {
    getAllUsers: (req, res) => {
        let testArr = userData.slice()
        if (req.query.age) {
            testArr = testArr.filter(user => user.age < req.query.age);
        }
        if (req.query.lastname) {
            testArr = testArr.filter(user => user.last_name === req.query.lastname);
        }
        if (req.query.email) {
            testArr = testArr.filter(user => user.email === req.query.email);
        }
        if (req.query.favorites) {
            testArr = testArr.filter(user => user.favorites.includes(req.query.favorites));
        }
        res.status(200).json(testArr);
    },
    getUserById: (req, res) => {
        // console.log(req.params);
        let user = userData.filter(user => user.id === parseInt(req.params.userid));
        // console.log(user);
        if (user[0]) {
            res.status(200).json(user[0]);
        } else {
            res.status(404).json(null);
        } 
    },
    getAdmins: (req, res) => {
        let admins = userData.filter(user => user.type === 'admin');
        res.status(200).send(admins);
    },
    getNonAdmins: (req, res) => {
        let nonAdmins = userData.filter(user => user.type !== 'admin');
        res.status(200).json(nonAdmins);
    },
    getUsersByType: (req, res) => {
        let users = userData.filter(user => user.type === req.params.userType);
        console.log(users);
        res.status(200).send(users);
    },
    updateUser: (req, res) => {
        // console.log(req.body)
        let index = userData.findIndex(e => e.id === parseInt(req.params.id));
        userData[index] = req.body;
        res.status(200).json(userData)
    },
    addUser: (req, res) => {
        let lastUser = userData.slice().pop();
        let id = lastUser.id + 1;
        console.log(id);
        let user = req.body;
        console.log(user);
        user.id = id;
        userData.push(user);
        res.status(200).send(userData)
    },
    deleteUser: (req, res) => {
        let index = userData.findIndex(e => e.id === parseInt(req.params.id));
        console.log(index);
        userData.splice(index, 1);
        res.status(200).send(userData)
    }

}