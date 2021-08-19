const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const {username, password} = req.body
      for (let i = 0; i < users.length; i++) 
      if (users[i].username === username) {
        const existing = bcrypt.compareSync(password, users[i].password)
        if (existing) {
          let userToReturn = {...users[i]}
          delete userToReturn.hash
          res.status(200).send(users[i])
          return
      }
    }
      res.status(400).send("User not found.")
  },
  register: (req, res) => {
    const {username, email, firstName, lastName, password} = req.body
    const salt = bcrypt.genSaltSync(5)
    const hash = bcrypt.hashSync(password, salt)
    let user = {
      username,
      email,
      firstName,
      lastName,
      password: hash
    }
    
    let userToReturn = {...user}
    delete userToReturn.password
    console.log('Registering User')
    console.log(req.body)
    users.push(user)
    res.status(200).send(req.userToReturn)
  }
};
  
  