import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
  image: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  quote: { type: String, required: true },
});

const List = mongoose.models.List || mongoose.model('List', listSchema);
export default List;
