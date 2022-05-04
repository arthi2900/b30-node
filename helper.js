import { client } from './index.js';
export async function getMovieById(id) {
  return await client.db("b30wd").collection("movies")
    .findOne({ id: id });
}
export async function getAllMovies() {
  await client.db("b30wd").collection("movies")
    .find({})
    .toArray();
}
export async function deleteMovie(id) {
  return client.db("b30wd")
    .collection("movies")
    .deleteMany({ id: id });
}
export async function createMovies(data) {
  return await client.db("b30wd")
    .collection("movies").insertMany(data);
}
export async function updateMovie(id, updateData) {
  return client.db("b30wd")
    .collection("movies")
    .updateOne({ id: id }, { $set: updateData });
}
