const userCtrl = {};

userCtrl.getUsers = (req,res) => res.json({message: []})

userCtrl.createUser = (req,res) => res.json({message: 'User Saved'});

userCtrl.getUser = (req,res) => res.json({title: 'User 1'});

userCtrl.updateUser = (req,res) => res.json({message: 'User Updated'});

userCtrl.deleteUser = (req,res) => res.json({message: 'User deleted'});

module.exports = userCtrl;