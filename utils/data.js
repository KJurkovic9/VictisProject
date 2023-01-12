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
      image: '/images/yeezy/shoe1.png',
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
      image: '/images/yeezy/shoe2.png',
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
      image: '/images/yeezy/shoe3.png',
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
      image: '/images/yeezy/shoe4.png',
      price: 50,
      brand: 'Zara',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: 'First Pants',
      slug: 'first-p',
      category: 'Pants',
      image: '/images/yeezy/shoe5.png',
      price: 50,
      brand: 'Zara',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: 'First Pants',
      slug: 'first-pa',
      category: 'Pants',
      image: '/images/yeezy/shoe6.png',
      price: 50,
      brand: 'Zara',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: 'First Pants',
      slug: 'first-pan',
      category: 'Pants',
      image: '/images/yeezy/shoe7.png',
      price: 50,
      brand: 'Zara',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: 'First Pants',
      slug: 'first-pant',
      category: 'Pants',
      image: '/images/yeezy/shoe8.png',
      price: 50,
      brand: 'Zara',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: 'First Pants',
      slug: 'f',
      category: 'Pants',
      image: '/images/yeezy/shoe9.png',
      price: 50,
      brand: 'Zara',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: 'First Pants',
      slug: 'fi',
      category: 'Pants',
      image: '/images/yeezy/shoe10.png',
      price: 50,
      brand: 'Zara',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: 'First Pants',
      slug: 'fir',
      category: 'Pants',
      image: '/images/yeezy/shoe11.png',
      price: 50,
      brand: 'Zara',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: 'First Pants',
      slug: 'firs',
      category: 'Pants',
      image: '/images/yeezy/shoe12.png',
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
