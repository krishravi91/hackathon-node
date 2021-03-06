import { client } from './index.js';

async function getMoviesByName(filter) {
  return await client
    .db("demo")
    .collection("movies")
    .find(filter)
    .toArray();
}

async function createMovies(data) {
    return await client
      .db("demo")
      .collection("movies")
      .insertMany(data);
}
  
async function deleteMovieByID(id) {
  return await client
    .db("demo")
    .collection("movies")
    .deleteOne({ id: id });
}

async function updateMovieByID(id, updatedMovie) {
  return await client
    .db("demo")
    .collection("movies")
    .updateOne({ id: id },{$set: updatedMovie});
}


export{getMoviesByName, createMovies, deleteMovieByID, updateMovieByID};