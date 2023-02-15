import List from '../../models/List';
import Product from '../../models/Product';
import TShirt from '../../models/TShirt';
import Cap from '../../models/Cap';
import Jersey from '../../models/Jersey';
import Shoe from '../../models/Shoe';
import User from '../../models/User';
import data from '../../utils/data';
import allShirts from '../../utils/tshirts';
import allCaps from '../../utils/caps';
import allJerseys from '../../utils/jerseys';
import allUsers from '../../utils/users';
import allShoes from '../../utils/shoes';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
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
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};

export default handler;
