import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'jone@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane',
    email: 'jane@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
