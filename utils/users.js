import bcrypt from 'bcryptjs';

const allUsers = {
  users: [
    {
      name: 'John',
      email: 'john@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'jane@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
};

export default allUsers;
