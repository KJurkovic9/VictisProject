import bcrypt from 'bcryptjs';

const data = {
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
  products: [
    {
      name: 'First Shirt',
      slug: 'first-shirt',
      category: 'Shirt',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Second Shoes',
      slug: 'second-shoes',
      category: 'Shoes',
      image: '/images/shoes2.jpg',
      price: 60,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 12,
      countInStock: 15,
      description: 'A popular shoes',
    },
    {
      name: 'First Shoes',
      slug: 'first-shoes',
      category: 'Shoes',
      image: '/images/shoes1.jpg',
      price: 30,
      brand: 'Nike',
      rating: 4.8,
      numReviews: 13,
      countInStock: 24,
      description: 'A popular shirts',
    },
    {
      name: 'First Pants',
      slug: 'first-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
      price: 50,
      brand: 'Zara',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
  ],
};

export default data;
