import express from "express";
const router=express.Router();
import{getMovieById,deleteMovie ,getAllMovies,updateMovie,createMovies} from '../helper.js';

router.get("/",async function (req, res) {
    const movies=await getAllMovies();
    console.log(movies);
    res.send(movies);
     })
  //display data and set error data also diplay(movie deleted error will display)
  router.get("/:id", async function (req, res) {
      console.log(req.params);
      const{id}=req.params;
      const movie=await getMovieById(id);
      console.log(movie);
     movie?res.send(movie):res.status("404 ").send({message:"404 error "});
          })
     //delete
     router.delete("/:id", async function (req, res) {
     console.log(req.params);
      const{id}=req.params;
      const result=await deleteMovie(id);
      console.log(result);
      res.send(result);
      })
      //deleteone
     /* app.delete("/movies/:id", async function (req, res) {
        console.log(req.params);
         const{id}=req.params;
         const result=await client.db("b30wd")
         .collection("movies")
         .deleteOnene({id:id});
         console.log(result);
         res.send(result);
         })*/
     
  //
  //update (only replace updateone or updatemulti)
  router.put("/:id", async function (req, res) {
    console.log(req.params);
     const{id}=req.params;
     const updateData=req.body;
     const result=await updateMovie(id, updateData);
     console.log(result);
     res.send(result);
     })
      //
  router.post("/", async function (req, res) {// db.movies.insertMany(data)
      const data = req.body;
      console.log(data);
      const result = await createMovies(data);
      res.send(result);});
      
      export const moviesRouter=router;