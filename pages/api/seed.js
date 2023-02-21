import List from '../../models/List';
import Product from '../../models/Product';
import TShirt from '../../models/TShirt';
import Cap from '../../models/Cap';
import Jersey from '../../models/Jersey';
import Shoe from '../../models/Shoe';
import User from '../../models/User';
import data from '../../utils/data';
import allShirts from '../../utils/products/tshirts';
import allCaps from '../../utils/products/caps';
import allJerseys from '../../utils/products/jerseys';
import allUsers from '../../utils/users';
import allShoes from '../../utils/products/shoes';

import Order from '../../models/Order';
import NewProduct from '../../models/NewProduct';
import newProducts from '../../utils/products/new';

import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await User.deleteMany();
  await User.insertMany(allUsers.users);
  await List.deleteMany();
  await List.insertMany(data.images);
  await TShirt.deleteMany();
  await TShirt.insertMany(allShirts.tshirts);
  await Cap.deleteMany();
  await Cap.insertMany(allCaps.caps);
  await Jersey.deleteMany();
  await Jersey.insertMany(allJerseys.jerseys);
  await Shoe.deleteMany();
  await Shoe.insertMany(allShoes.shoes);
  await NewProduct.deleteMany();
  await NewProduct.insertMany(newProducts.new);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};

export default handler;
