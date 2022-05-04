//services->restart mongodb
//create db
use  dbName
//use b30
//show collections
create a movie collection
db.movies.insertMany([
    {
      id:"100",
      name: "Friendship",
      poster: "https://www.newsbricks.com/root_upld/general-news/2021/09/06281/org_00861202109171235.jpg",
      rating: 9,
      starCast: " Harbhajan Singh, Arjun, Losliya ,Sathish, M. S. Bhaskar ,Pala Karuppiah, Badava Gopi",
      summary: "When their classmate is sexually assaulted, a group of college students rallies to raise awareness and fights to bring the perpetrators to justice.",
      trailor:""
    },
    {
      id:"101",
      name: "Aranmanai 3",
      poster: "https://cinespot.net/gallery/d/3532353-4/Aranmanai+3+tamil+movie+photos.jpg",
      starCast: "Arya, Raashi Khanna, Sakshi Agarwal, Andrea Jeremiah",
      rating: 7.5,
      summary: "Jyothi, the daughter of a landlord, gets haunted by an unknown entity in her childhood. However, when the spirit begins to trouble another member of her family, she decides to uncover its identity.",    
        trailor:""
    },
    {
      id:"102",
      name: "Nadukkaveri",
      poster: "https://cinespot.net/gallery/d/3521546-4/Kamali+From+Nadukkaveri+Tamil+Movie+Photos.jpg",
      starCast: "Anandhi, Rohit Seraph",
      rating: 10,
      summary: "Kamali, a young woman, strives hard to land a seat in a prestigious educational institute. Her journey soon inspires others from her small village to follow in her footsteps.",
      trailor:""
    },
    {
      id:"103",
      name: "Sulthan",
      poster: "https://cinespot.net/gallery/d/3529130-2/Sulthan+tamil+movie+images+_9_.jpg",
      starCast: "Karthik, Raashi Khanna",
      rating: 8.5,
      summary: "Sulthan, a motherless child, is raised by a group of criminals working for his father. However, when his father dies, he decides to reform the group into better people.",
      trailor:""
    }
  ])

//
db.movies.find({}).pretty();
//count documents
db.movies.find({}).count();
/*> db.movies.find({}).count();
4*/
db.movie.renameCollection("new name") //(movies)
db.movies.find({ "rating":{
    $gt=8
}});
//$gt,$lt,$gte,$lte,$ne(not equal),$eq,$in,$nin
//greater than rating=8;
db.movies.find({ "rating":{$gt:8}}).pretty();
//PROJECTION
//inclusion
db.movies.find({},{name:1}).pretty();
//
db.movies.find({},{rating:0}).pretty();
//select name,rating from movies where rating>8;
db.movies.find({rating:{$gt:8}},{name:1,rating:1}).pretty();
//mixed projection (only mixed in _id )
db.movies.find({},{_id:0,name:1}).pretty();
/*
> db.movies.find({},{_id:0,name:1}).pretty();
{ "name" : "Friendship" }
{ "name" : "Aranmanai 3" }
{ "name" : "Nadukkaveri" }
{ "name" : "Sulthan" }
> db.movies.find({},{rating:0,name:1}).pretty();
Error: error: {
        "ok" : 0,
        "errmsg" : "Cannot do inclusion on field name in exclusion projection",
        "code" : 31253,
        "codeName" : "Location31253"
}
>
*/
//select name,rating from movies where rating>8; without display _id
db.movies.find({rating:{$gt:8}},{_id:0,name:1,rating:1}).pretty();

//sort
db.movies.find({}).sort({rating:-1}).pretty();//desc(-1)
db.movies.find({}).sort({rating:1}).pretty();//asce(+1)
/*> db.movies.find({},{name:1,rating:1,_id:0}).sort({name:1}).pretty();
{ "name" : "Aranmanai 3", "rating" : 7.5 }
{ "name" : "Friendship", "rating" : 9 }
{ "name" : "Nadukkaveri", "rating" : 10 }
{ "name" : "Sulthan", "rating" : 8.5 }
> db.movies.find({},{name:1,rating:1,_id:0}).sort({rating:1}).pretty();
{ "name" : "Aranmanai 3", "rating" : 7.5 }
{ "name" : "Sulthan", "rating" : 8.5 }
{ "name" : "Friendship", "rating" : 9 }
{ "name" : "Nadukkaveri", "rating" : 10 }
*/
//first top 3 name
//select name ,rating from movies order limet
db.movies.find({},{name:1,rating:1,_id:0}).sort({rating:-1}).limit(2).pretty();
//offset(skip)
db.movies.find({},{name:1,rating:1,_id:0}).sort({rating:-1}).skip(3).pretty();


//summary
db.orders.insertMany(
[
{ _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
{ _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
{ _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
{ _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
{ _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
{ _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
])

//select productName ,sum(quantity) from order status="urgent" group by product name
//
db.collection.aggretgate([
//stage 1
//stage2
...AbortController
])
//stage1
db.orders.aggregate([
{$match:{status:"urgent"}}
  ])
  //stage2
  db.orders.aggregate([{$match:{status:"urgent"}},{$group:{_id:"$productName",totalUrgentQuantity:{$sum:"$quantity"}},},])
  //sort as use
  db.orders.aggregate([{$match:{status:"urgent"}},{$group:{_id:"$productName",totalUrgentQuantity:{$sum:"$quantity"}},},{$sort:{_id:1}},])
  //add new document
  
  //updateone
  db.movies.updateOne({name:"sulthan"},{$set:{language:"Tamil"}});

  //delete

  db.movies.deleteMany({rating:8,language: "Tamil"})
 db.movies.find({}).pretty();



 